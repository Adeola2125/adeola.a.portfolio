import VehiclesPage from "./VehiclesPage.js";
import VehiclesPage2 from "./VehiclesPage2.js";
import { useAuth } from 'src/hooks/useAuth';
import GlobalModal from "../../Modals/GlobalModal";
import { useEffect, useState } from "react";
import bus from "src/bus.js";


export default function OnboardIndex() {
    const { data } = useAuth();
    const [add, setadd] = useState(false);
    const handleClose = () => {
        setadd(!add);

    }

    useEffect(() => {
        bus.on('open-addvehicle-modal', () => {
            setadd(true)
        })
    }, [])


    return (
        <>

            {data.type === "transport" ? <VehiclesPage /> : <VehiclesPage2 />}
            {/* Driver info Modal */}
            <GlobalModal
                open={add}
                onClose={setadd}
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                width='540px !important'
                height='670px !important'
                overflow='hidden'
                bgcolor='#FFFF'
                border='1px solid #F5F5F5'
                borderRadius='5px'
                boxShadow='24'
                p='25px'
            >
                <div className={`modal_content`} style={{ height: '84vh' }}>
                    <div className={`modal_header mb-0`}>
                        <h5 className="mb-1" style={{
                            fontSize: '19px',
                            fontWeight: '700',

                        }}>Add Bus</h5>

                        <span onClick={handleClose} style={{ cursor: 'pointer' }}>
                            <img src="/assets/icons/x.svg" alt="" />

                        </span>
                    </div>

                    <p className="text-muted mb-4 mt-0" style={{ fontSize: '13px' }}>Add details to your own vehicles</p>

                    {/* className={`${styles.retailer_modal_product_img}`} style={{
                  // backgroundImage: `url('${url}')`,
                  width:"15%",
                  height:"100px"
              }} */}
                    <form action="" className="mt-0">
                        <div className="row">


                        </div>

                        <div className="mb-4">
                            <button type="button" className={`modal_btn btn btn-block`}>
                                Save
                            </button>


                        </div>

                    </form>


                </div>
            </GlobalModal>
        </>
    );

}