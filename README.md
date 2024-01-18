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
 - **[]**- dependency array is optional
 - **useEffect(()=>{ })** - without dependency array, useEffect called everytime when component render.
 - **useEffect(()=>{ },[])** - with empty dependency array, useEffect called once when initially component rendered.
 - **useEffect(()=>{ }**,[something inside array]) - with something inside dependency array, useEffect called everytime when that something changes everytime.

 ## useState() Hook
 - Never use useState() outside the component.
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

 ## Optimize our app-customHooks,code splitting.
 - Hooks is normal javascript utility function.
 - create our own custom hooks.
 - If we have a lot of components it bundles into one files, if it happens that bundled file size is high.
 - In other scenario, without bundle the files, we can't load that lot of components in browsers.
 - The above two scenarios are not suits when come to large scale application.
 - To solve this, we use concept called **code splitting**.
 - Simple words, bundle each component separately.
 - To achieve that, we use  lazy() function and wrap the component inside the <Suspense></Suspense> component that given by react.
 - If we put component inside lazy() function, on first load that component is not inside the bundle file.
 But, when click that component, react create a separate bundle for that component. This is called **code splitting**.
 - Chunking, lazy loading, code splitting, dynamic import, on demand change, these all are same concept with different jargons.

 ## Data is new oil
 ### Higher order components
 - It is function, that takes input as existing component, and return the existing component as enhanced component.
 ### Lifting the state up
 - Passing data from child to parent and parent send the data as prop to child. This is called **lifting the state up**
 ### Controlled and Uncontrolled components.
 - One component controlled the other component - now that other component is called **controlled component**
 ### Props drilling
 - Assume 5 components, it's hierarchy in sequence like 1,2,3,4,5.
 - We have scenario, pass data from 1st component to 5th component.
 - For that, first we pass data from 1st to 2nd and 2nd to 3rd and 3rd to 4th and 4th to 5th.
 - These sequence is called 'Props drilling'
 - This is not a good practice to pass the data.
 - To solve this, we use concept called **Context**
### Context
- Context concept simple words- create data in one place and use it in our whole app from any place.
- By using **Context** concept, globally we can  access the data, update the data, modify the data.

