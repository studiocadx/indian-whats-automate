
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, Loader2, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { scrollToSection } from "@/utils/scrollUtils";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { verifyEmail, currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);

  // If user is already verified, redirect to onboarding
  useEffect(() => {
    if (currentUser?.emailVerified) {
      if (!currentUser.onboardingComplete) {
        navigate("/onboarding");
      } else {
        navigate("/dashboard");
      }
    }
  }, [currentUser, navigate]);

  // Handle token verification automatically if present
  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        setIsLoading(true);
        try {
          await verifyEmail(token);
          setIsVerified(true);
          // Redirect to onboarding after a short delay
          setTimeout(() => {
            navigate("/onboarding");
          }, 3000);
        } catch (error) {
          // Error is handled in the auth context
        } finally {
          setIsLoading(false);
        }
      }
    };

    verifyToken();
  }, [token, verifyEmail, navigate]);

  // Handle countdown for resend button
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
      setCountdown(60);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  const handleResend = async () => {
    // In a real app, you would send a new verification email here
    setResendDisabled(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Success message is shown by the auth context
  };

  // If no user is found, redirect to login
  if (!currentUser && !isVerified) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-brand-light flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-primary">
            WhatsAutomate
          </h2>
        </Link>
        <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
          {isVerified ? "Email Verified!" : "Verify your email"}
        </h2>
      </div>

      <AnimatedSection className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isVerified ? (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <p className="text-gray-700">
                Your email has been verified successfully! You will be redirected to the onboarding process in a few seconds.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => navigate("/onboarding")}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90"
                >
                  Continue to Onboarding
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-700">
                We've sent a verification link to <span className="font-medium">{currentUser?.email}</span>. 
                Please check your inbox and click the link to verify your email address.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  If you don't see the email, check your spam folder or click the button below to resend the verification link.
                </p>
                <Button
                  variant="outline"
                  onClick={handleResend}
                  disabled={resendDisabled || isLoading}
                  className="w-full"
                >
                  {resendDisabled ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Resend in {countdown}s
                    </>
                  ) : (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Resend verification email
                    </>
                  )}
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-500">
                  Already verified your email?{" "}
                  <Link to="/login" className="text-brand-primary hover:text-brand-primary/80 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default VerifyEmail;
