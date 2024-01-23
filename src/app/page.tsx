import { Button, Input, Label } from '@/components/ui';

export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="email" title={'Email'} />
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="correo@correo.com"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="name" title={'Name'} />
              <div className="mt-2">
                <Input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="John"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="lastname" title={'LastName'} />
              <div className="mt-2">
                <Input
                  id="lastname"
                  name="lastname"
                  type="lastname"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" title={'Password'} />
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="*************"
                />
              </div>
            </div>

            <div>
              <Button type="submit" title="Sign In" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
