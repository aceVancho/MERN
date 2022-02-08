function Login() {

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const target = event.target as typeof event.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;

        // More later
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col border w-1/4 items-start">
            <input 
                className="block" 
                type="email" 
                name="email" 
                placeholder="email" 
                autoComplete="on">
                </input>
            <input 
                className="block" 
                type="password" 
                name="password" 
                placeholder="password" 
                autoComplete="on">
            </input>
            <button type="submit" value="Submit">Submit</button>
        </form>
    );
  }
  
  export default Login;