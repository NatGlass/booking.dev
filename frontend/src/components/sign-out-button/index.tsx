import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-client";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

function SignOutButton() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      toast({ title: "Success", description: "Signed out successfully" });
    },
    onError: (error: Error) => {
      toast({ title: error.name, description: error.message });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <Button data-testid="sign-out-header-button" onClick={handleClick}>
      Sign Out
    </Button>
  );
}

export default SignOutButton;
