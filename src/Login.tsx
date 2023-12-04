import "./Login.css";

function Login() {
    return (
        <>
            <form action="/">
                <div className="login-grid">
                    <div className="login-header">
                        <div className="login-logo">LOGO PROJECT-NAME</div>
                        <div className="login-signup">SIGN-UP</div>
                    </div>
                    <div className="login-body">

                        <div className="login-body-line">AUTH</div>
                        <div className="login-body-line"><input type="text" placeholder="Username" /></div>
                        <div className="login-body-line"><input type="password" placeholder="Password" /></div>

                    </div>
                    <div className="login-item footer">a</div>
                </div>
            </form >
        </>
    )
}

export default Login;