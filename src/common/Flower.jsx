export const Flower = ({name}) => {
    return (
        <div className={name}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48px"
                height="48px"
                viewBox="0 0 64 64"
            >
                <path id="petals"
                      fill="hsl(221, 100%, 31%)"
                      d="M63.2,28.234c0-7.13-5.78-12.91-12.911-12.91c-2.056,0-3.997,0.482-5.723,1.337  c0.223-0.948,0.345-1.936,0.345-2.951C44.911,6.58,39.13,0.8,32,0.8c-7.131,0-12.911,5.78-12.911,12.91  c0,1.016,0.122,2.003,0.343,2.951c-1.725-0.854-3.666-1.337-5.722-1.337c-7.13,0-12.91,5.78-12.91,12.91  c0,6.147,4.298,11.289,10.052,12.589c-2.542,2.358-4.135,5.726-4.135,9.467c0,7.13,5.78,12.91,12.911,12.91  c5.847,0,10.784-3.889,12.372-9.221c1.587,5.332,6.523,9.221,12.373,9.221c7.129,0,12.909-5.78,12.909-12.91  c0-3.741-1.593-7.108-4.135-9.467C58.901,39.523,63.2,34.382,63.2,28.234z"
                />
                <circle id="center" fill="hsl(50, 93%, 82%)" cx="32" cy="34.6" r="7.8"/>
            </svg>
        </div>
    )
}