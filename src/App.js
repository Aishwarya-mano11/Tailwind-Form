import sampleimg from "./testimg.png";

function App() {
  return (
    <section className=" flex items-center justify-center bg-zinc-100 min-h-screen ">
      <div className=" bg-white m-5">
        <div className="flex ">
          <div className="w-1/2 ">
            <h3 className="font-semibold flex justify-center pt-20 mt-10 text-2xl">
              Sign in to your account
            </h3>
            <p className="text-sm mb-2 pl-16 mt-5 text-zinc-400 font-medium">
              Welcome back! Select method to log in:
            </p>
            <div className="w-3/4  border-solid border-2 border-grey-500 rounded flex items-center justify-center text-center ml-16 p-1 hover:scale-105 duration-300 ">
              <button className="text-center w-auto  flex justify-center items-center font-medium hover:scale-105 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  x="0px"
                  y="0px"
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Google
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 w-50 items-center text-gray-300 font-medium text-sm">
              <hr className="border-gray-300 w-22 ml-16 pl-16 pb-5" />
              <p className="pb-5 pl-4 ">or continue with email</p>
              <hr className="border-gray-300 w-22 mr-16 pb-5" />
            </div>
            <form action="" className="flex flex-col gap-4  ">
              <input
                className="p-2 rounded border w-3/4 pl-4 mb-4 ml-14"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded border w-3/4 pl-4 ml-14"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 mr-20"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button className="bg-[#002D74] rounded text-white py-2 hover:scale-105 duration-300 w-3/4 ml-14 mt-2">
                Sign in
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <img
              src={sampleimg}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
