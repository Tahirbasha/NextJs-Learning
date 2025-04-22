export default function Layout({children} : {children: React.ReactNode}){
    return<>
    <h1>Nested Layout</h1>
    <div style={{border: '1px solid skyblue'}}>

    {children}
    </div>
    </>
}