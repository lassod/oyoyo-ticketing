import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

type Mode = "single" | "double";
export type SubscribePayload = {
  email: string;
  tags?: string[];
  fields?: Record<string, string>;
  mode?: Mode; // "single" => subscribed now, "double" => confirm email
};

export function useSubscribeEmail() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (payload: SubscribePayload) => {
      const res = await fetch("/api/emailoctopus/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || "Subscription failed");
      }
      return data as { message: string };
    },
    onSuccess: (data) => {
      toast({
        variant: "success",
        title: "Success!",
        description: data?.message || "You're on the list 🎉",
      });
    },
    onError: (err: any) => {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: err?.message || "Something went wrong. Please try again.",
      });
    },
  });
}
