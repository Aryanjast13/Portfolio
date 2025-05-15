import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/store/hooks/hooks";
import { login } from "@/store/slices/authslice";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function Login({
  className,
  ...props
}: React.ComponentProps<"div">) {
  interface FormData {
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    try {
      const res = await dispatch(login(formData)).unwrap();
      if (res.success) {
        navigate("/");
        toast.success("Login successful!");
      } else {
        toast.error("Login failed!");
      }
    } catch (err: any) {
      console.log("Error:", err);
      setError("Login failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-dvh w-full flex justify-center items-center bg-gray-500">
      <div className={cn("flex flex-col gap-6 w-1/5 ", className)} {...props}>
        <Card>
          <CardHeader>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Johon@example.com"
                    autoComplete="true"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    autoComplete="true"
                  />
                </div>

                {error && (
                  <p className="text-center text-sm text-red-500">{error}</p>
                )}
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <Loader className="animate-spin" />
                        <span>Logging in</span>
                      </div>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Register
                </a>
              </div>

              {}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
