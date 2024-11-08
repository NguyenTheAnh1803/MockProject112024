import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card color="transparent" shadow={false} className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Welcome back! Please enter your details to log in.
        </Typography>
        <form className="mt-8 mb-2 w-full">
          <div className="mb-4 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Remember Me
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don’t have an account?{" "}
            <a href="/register" className="font-medium text-gray-900">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Login;
