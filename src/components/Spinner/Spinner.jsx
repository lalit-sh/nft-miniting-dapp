import InfinityLoading from "../../assests/svg/infinity-loading.svg";

const Spinner = ({
    children,
    loading,
    className = "",
    containerWidth="100vw",
    containerHeight="100vh",
    width="100px"
}) => {

    if(loading || !children){
        return (
            <div 
                className={className}
                display={"flex"} 
                width={containerWidth} 
                height={containerHeight} 
                justifyContent="center" 
                alignItems={"center"}
            >
                <img src={InfinityLoading} width={width} height={"auto"} />
            </div>
        )
    }

    return children;
}

export default Spinner;