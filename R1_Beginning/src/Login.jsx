import React from "react"

function Login() {
    return (
        <div >
            <div className="" >
                <label for="#i1">Username</label>
                <input type="text" className="form-control w-25" id="i1"></input>
            </div>
            <div >
                <label for="#i2">Password</label>
                <input type="text" className="form-control w-25" id="i2"></input>
            </div>
            <button className="btn btn-primary mt-1">Log in</button>
        </div>
    )
}
export default Login