const Contact=()=>{
    return(
        <div className="ml-4">
            <h1 className="font-bold text-2xl">Contact Us</h1>
            <div>
                <input className="border border-black"type="text" placeholder="name"/>            
                <input className="border border-black ml-2" type="text" placeholder="email"/>
                <button className="ml-2 bg-gray-200 px-2 rounded-lg" type="button">Submit</button>            
            </div>
            {/* <h2 className="my-2">Hey dev's contact us by curiousdev@gmail.com</h2> */}
        </div>
    )
}
export default Contact;