# Namaste React

## Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

## Component 
### Two types of component
- Class component 
- Functional component 
### Functional component
Function component is simple JS function that return JSX or ReactElement

/**
 * -Header
 *  -Logo
 *  -Nav items
 *      -Home
 *      -About
 *      -Cart
 * -Body
 *  -Search
 *  -restaurant cards
 *      -image
 *      -res name
 *      -cuisine
 *      -stars
 *      -deliverytime
 * -Footer
 *  -copyright
 *  -links
 * 
 */

 ## React Hooks(Many hooks there. These two mostly used)
 - useState()- normal JS utility function
 -useEffect()-normal JS utility function

 ## Shimmer UI
 - fake design shows before the actual UI shows 
 - Most of companies use this Shimmer UI e.g Youtube,linkedin,swiggy etc...

 ## Conditional Rendering
 - Rendering the things based of some condition is called conditional Rendering

 ## useEffect() Hook
 - Syntax is **useEffect(()=>{ },[])**
 - []- dependency array is optional
 - **useEffect(()=>{ })** - without dependency array, useEffect called everytime when component render.
 - **useEffect(()=>{ },[])** - with empty dependency array, useEffect called once when initially component rendered.
 - **useEffect(()=>{ }**,[something inside array]) - with something inside dependency array, useEffect called everytime when that something changes everytime.

 ## useState() Hook
 - Never use useState() outside the componen.
 - Always put useState() variable top of the program or first line of the component function.
 - Don't use useState() variable inside ifelse conditon, for loop, function(), because it makes inconsistency in an app.
 - The above point are good practices to use useState() variable. It gives smooth experience of useState().

 ## Two type routing in web apps
 - **Client side routing** - Doesn't make a network call when we click pages name to navigate and shows required page without refreshing or re-loading the whole page.
 - **Server side routing** - Make a network call when we click a pages name to navigate and shows required page with refreshing or re-loading the whole page.

 ## React-router-dom
 - **CreateBrowserRouter**-used to create a route
 - **RouterProvider**-used to push the child route,
 - **Outlet**- used to replace the component depends upon the path
 - **useRouteError(hooks)**- used to show the exact error status,
 - **useParams(hooks)** - used to read the dynamic id