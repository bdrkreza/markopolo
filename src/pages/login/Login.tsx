import "./formInput.scss";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div className="container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="pswd" placeholder="Password" />
            <button>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="pswd" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
