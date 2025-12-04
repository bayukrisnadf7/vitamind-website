import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-center flex-col items-center">
          <img src="images/logo.png" alt="" width={100} />
          <h1 className="text-xl font-bold">VitaMind</h1>
        </div>
        <div className="mt-5 border border-gray-200 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Selamat Datang
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>

            <button
              onClick={() => navigate("/")}
              className="w-full bg-[#56B3FD] hover:bg-[#56B3FD]/80 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>

        <div className="mt-6 flex gap-2 justify-center items-center border-t-amber-300 text-center text-sm text-gray-600">
          Don't have an account ?
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
