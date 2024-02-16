

// ----------------------------------------------------------------------
import styles from "./Administration.module.css"
import {
    useEffect,
    useState
} from "react"
import {
    Card,
    //   Avatar,
} from '@mui/material';
import * as React from 'react';
import Scrollbar from '../../components/scrollbar';
import TextField from '@mui/material/TextField';
import { Helmet } from "react-helmet-async";
import Checkbox from '@mui/material/Checkbox';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import bus from "src/bus"; import GlobalModal from "../../Modals/GlobalModal";

// ----------------------------------------------------------------------

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    overflow: 'scroll',
    bgcolor: '#F5F5F5',
    border: '1px solid #F5F5F5',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

export default function AdministrationPage() {
    const [InviteAdminModalOpen, setInviteAdminModalOpen] = useState(false);
    const [EditAdminModalOpen, setEditAdminModalOpen] = useState(false);
    const [ViewAdminModalOpen, setViewAdminModalOpen] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [successDialog, setSuccessDialog] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleCloseInviteAdmin = () => {
        setInviteAdminModalOpen(false);
    };

    const handleCloseEditAdmin = () => {
        setEditAdminModalOpen(false);
    };

    const handleCloseViewAdmin = () => {
        setViewAdminModalOpen(false);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    useEffect(() => {
        bus.on("open-invite-modal", () => {
            setInviteAdminModalOpen(true);
        });
    }, []);
    return (
        <>

            <Helmet>
                <title> Administration </title>
            </Helmet>

            <div className="wrapper">
                <div className="header d-block d-md-none mt-2 pt-3">
                    <div
                        className={`${styles.product_actions} d-md-flex justify-content-between`}
                    >
                        <div className=" ">
                            <h4 className={`mb-0 pb-0`}>Administration</h4>
                            <p style={{ fontSize: "14px" }} className={`mb-0 mt-2 pb-0`}>
                                View all admin members and assign their roles
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" px-0 px-md-2 pt-2">
                    <div className={`${styles.filters} mt-3`}>
                        <div className="row">
                            <div className={`${styles.hold_input} col-6   `}>
                                <img src="/assets/icons/search.svg" alt="" />
                                <input type="text" name="search" placeholder="Search" style={{ textIndent: '25px', width: '240px' }} className=" form-control" />

                            </div>

                        </div>
                    </div>

                    <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>

                        <Scrollbar>
                            <div className={`${styles.overflow_table} table-responsive  pt-3 pb-3 pl-0 pr-0`}  >
                                <table className={`${styles.table} table-hover table-striped`}>
                                    <thead className={`${styles.thead}`}>
                                        <tr>
                                            <th className="text-muted" style={{ width: "16%" }}>
                                                S/N
                                            </th>
                                            <th className="text-muted">
                                                Admin Name
                                                <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                                            </th>
                                            <th className="text-muted">
                                                Date Ordered
                                            </th>
                                            <th className="text-muted">

                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <span style={{ fontSize: '13px' }}>
                                                    1
                                                </span>
                                            </td>

                                            <td className="">
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Ariene McCoy
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            mccoy@gmail.com
                                                        </span>

                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <span>12/02/23</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button}`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setViewAdminModalOpen(true)} >View</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setEditAdminModalOpen(true)} >Edit</button>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <span style={{ fontSize: '13px' }}>
                                                    2
                                                </span>
                                            </td>

                                            <td className="">
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Michael Gillard
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            michael@gmail.com
                                                        </span>

                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <span>12/02/23</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button}`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setViewAdminModalOpen(true)} >View</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setEditAdminModalOpen(true)} >Edit</button>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <span style={{ fontSize: '13px' }}>
                                                    3
                                                </span>
                                            </td>

                                            <td className="">
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Michael Gillard
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            michael@gmail.com
                                                        </span>

                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <span>12/02/23</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button}`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setViewAdminModalOpen(true)} >View</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setEditAdminModalOpen(true)} >Edit</button>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <span style={{ fontSize: '13px' }}>
                                                    4
                                                </span>
                                            </td>

                                            <td className="">
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Michael Gillard
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            michael@gmail.com
                                                        </span>

                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <span>12/02/23</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button}`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setViewAdminModalOpen(true)} >View</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setEditAdminModalOpen(true)} >Edit</button>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <span style={{ fontSize: '13px' }}>
                                                    5
                                                </span>
                                            </td>

                                            <td className="">
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Michael Gillard
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            michael@gmail.com
                                                        </span>

                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <span>12/02/23</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button}`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setViewAdminModalOpen(true)} >View</button>
                                                        <button type="button" className="rss dropdown-item btn border-0" onClick={() => setEditAdminModalOpen(true)} >Edit</button>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                    </tbody>

                                </table>

                            </div>
                        </Scrollbar>
                        <div className="card border-0 p-0 m-0">
                            <div className="card-body pt-0 mt-0">
                                <div className="d-flex justify-content-between">
                                    <div className=" pt-2">
                                        Page 1 of <b className="pl-1"> 10</b>
                                    </div>
                                    <div className={`${styles.pagination_button_container}`}>
                                        <button className="btn border" >
                                            <span className="d-none d-sm-block">
                                                Previous
                                            </span>
                                            <span>
                                                <i className="bi bi-chevron-left d-block d-sm-none"></i>
                                            </span>
                                        </button>
                                        &nbsp;
                                        &nbsp;
                                        <button className="btn border" >
                                            <span className="d-none d-sm-block">
                                                Next
                                            </span>
                                            <span>
                                                <i className="bi bi-chevron-right d-block d-sm-none"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>


            {/* Invite Admin Modal */}

            <GlobalModal
                open={InviteAdminModalOpen}
                onClose={handleCloseInviteAdmin}
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                // width='1000px'
                width='fit-content'
                maxWidth='95% !important'
                height='auto !important'
                overflow='hidden'
                bgcolor='#fff'
                border='1px solid #F5F5F5'
                borderRadius='5px'
                boxShadow='24'
                p='25px'
            >
                <div className={`${styles.modal_content}`} style={{ width: '60em', maxWidth: '100%' }}>
                    <div className={`${styles.modal_header} mb-0`}>
                        <h5 className='mb-0' style={{
                            fontSize: '19px',
                            fontWeight: '700',

                        }}><span>Bankole Stephen</span></h5>
                        <span onClick={handleCloseInviteAdmin} style={{ cursor: 'pointer' }}>
                            <img src="/assets/icons/x.svg" alt="" />

                        </span>

                    </div>
                    {/* <p className='text-muted mt-1' style={{ fontSize: '14px' }}>Add Admin to manage the dashboard</p> */}

                    <form action="" className="mt-4">
                        <div className="row">
                            <div className="col-12 mb-3">

                                <label htmlFor="ounit">Email Address</label>
                                <div className="d-sm-flex">
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="">
                                            <TextField
                                                name="min_products"
                                                required
                                                type='email'
                                                id="ounit"
                                                placeholder="jbennjoku@gmail.com"
                                                size="small"
                                                fullWidth

                                            />
                                        </div>
                                    </div>
                                    <div className="ml-sm-4 mt-3 mt-sm-0 text-right"><button className="btn btn-success text-white" style={{ whiteSpace: 'nowrap' }} onClick={() => { setSuccessDialog(true); handleCloseInviteAdmin() }}>Send Invite</button></div>
                                </div>

                            </div>
                        </div>

                        <div className="d-sm-flex justify-content-between mb-3">
                            <p className='m-0 mt-2'>
                                <label htmlFor="ounit">Select Permissions For This Role</label>
                            </p>
                            <p className='d-flex m-0 text-right' style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Checkbox {...label} id='selectAll' style={{ verticalAlign: 'middle', padding: '0', margin: '0' }} />
                                <label className='mt-2 ml-2' for='selectAll'>Select All</label>
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="ounit" className="text-muted">Dashboard</label>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='viewDb' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='viewDb'>User Can View Dashboard</label>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="ounit" className="text-muted">Driver</label>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='viewDriver' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='viewDriver'>User Can View Driver</label>
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='manageDriver' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='manageDriver'>User Can Manage Driver</label>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="ounit" className="text-muted">Orders</label>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='viewDriver' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='viewDriver'>User Can View Orders</label>
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='manageDriver' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='manageDriver'>User Can Manage Orders</label>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="ounit" className="text-muted">Route</label>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='viewRoute' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='viewRoute'>User Can View Route</label>
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='manageRoute' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='manageRoute'>User Can Manage Route</label>
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='deleteRoute' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='deleteRoute'>User Can Delete Route</label>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="ounit" className="text-muted">Operation</label>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='manageOpr' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='manageOpr'>User Can Manage Operation</label>
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='viewOpr' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='viewOpr'>User Can View Operation</label>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="ounit" className="text-muted">Vehicles</label>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='viewVehicle' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='viewVehicle'>User Can View Vehicles</label>
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='manageVehicle' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='manageVehicle'>User Can Manage Vehicles</label>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="ounit" className="text-muted">Charter</label>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='viewCharter' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='viewCharter'>User Can View Charter</label>
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Checkbox {...label} id='manageCharter' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                                <label className='mt-2 ml-2' for='manageCharter'>User Can Manage Charter</label>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </GlobalModal>

            {/* Invite Success Modal */}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={successDialog}
                onClose={() => setSuccessDialog(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                disableEnforceFocus
            >
                <Fade in={successDialog}>
                    <Box className={`mobile_modal_size modal_bg`} sx={style1}>
                        <div className={`text-center add_to_cart_content`}>
                            <img src="/assets/icons/circleCheck.svg" alt="" />
                            <h5 className="mt-3 mb-2" style={{ fontWeight: 'bold' }}>Invitation Sent</h5>
                            <p className='text-center' style={{ textAlign: 'center !important' }}>
                                Invitation has been sent to Email Address

                            </p>
                            <button onClick={() => setSuccessDialog(false)} className={`modal_btn d-block w-100 hover btn btn-success text-white mt-3`}>
                                Confirm
                            </button>
                        </div>



                    </Box>
                </Fade>
            </Modal>


            {/* Admin Edit Modal */}

            <GlobalModal
                open={EditAdminModalOpen}
                onClose={handleCloseEditAdmin}
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                // width='1000px'
                width='fit-content'
                maxWidth='95% !important'
                height='auto !important'
                overflow='hidden'
                bgcolor='#fff'
                border='1px solid #F5F5F5'
                borderRadius='5px'
                boxShadow='24'
                p='25px'
            >
                <div className={`${styles.modal_content}`} style={{ width: '60em', maxWidth: '100%' }}>
                    <div className={`${styles.modal_header} mb-0`}>
                        <h5 className='mb-0' style={{
                            fontSize: '19px',
                            fontWeight: '700',

                        }}><span>Bankole Stephen</span></h5>
                        <span onClick={handleCloseEditAdmin} style={{ cursor: 'pointer' }}>
                            <img src="/assets/icons/x.svg" alt="" />

                        </span>

                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ounit">Email Address</label>
                            <div className="d-sm-flex">
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <TextField
                                            name="min_products"
                                            required
                                            type='email'
                                            id="ounit"
                                            placeholder="jbennjoku@gmail.com"
                                            size="small"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ounit">Password</label>
                            <div className="d-sm-flex">
                                <div className="" style={{ width: '100%' }}>
                                    <div className={`${styles.showPasswordWrap} mb-4`}>
                                        <FormControl sx={{ width: '100%', p: 0 }} variant="outlined">
                                            <OutlinedInput
                                                placeholder="********"
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="ml-sm-4 mt-3 mt-sm-0 text-right"><button className="btn btn-success text-white" style={{ whiteSpace: 'nowrap' }} onClick={() => setEditAdminModalOpen(false)}>Save</button></div>
                            </div>
                        </div>
                    </div>

                    <div className="d-sm-flex justify-content-between mb-3">
                        <p className='m-0 mt-2'>
                            <label htmlFor="ounit">Select Permissions For This Role</label>
                        </p>
                        <p className='d-flex m-0 text-right' style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Checkbox {...label} id='selectAll' style={{ verticalAlign: 'middle', padding: '0', margin: '0' }} />
                            <label className='mt-2 ml-2' for='selectAll'>Select All</label>
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Dashboard</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='viewDb' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='viewDb'>User Can View Dashboard</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Driver</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='viewDriver' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='viewDriver'>User Can View Driver</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='manageDriver' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='manageDriver'>User Can Manage Driver</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Orders</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='viewDriver' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='viewDriver'>User Can View Orders</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='manageDriver' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='manageDriver'>User Can Manage Orders</label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Route</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='viewRoute' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='viewRoute'>User Can View Route</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='manageRoute' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='manageRoute'>User Can Manage Route</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='deleteRoute' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='deleteRoute'>User Can Delete Route</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Operation</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='manageOpr' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='manageOpr'>User Can Manage Operation</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='viewOpr' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='viewOpr'>User Can View Operation</label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Vehicles</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='viewVehicle' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='viewVehicle'>User Can View Vehicles</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='manageVehicle' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='manageVehicle'>User Can Manage Vehicles</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Charter</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='viewCharter' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='viewCharter'>User Can View Charter</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Checkbox {...label} id='manageCharter' style={{ verticalAlign: 'middle', margin: '0', padding: '0' }} />
                                            <label className='mt-2 ml-2' for='manageCharter'>User Can Manage Charter</label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GlobalModal>


            {/* Admin View Modal */}

            <GlobalModal
                open={ViewAdminModalOpen}
                onClose={handleCloseViewAdmin}
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                // width='1000px'
                width='fit-content'
                maxWidth='95% !important'
                height='auto !important'
                overflow='hidden'
                bgcolor='#fff'
                border='1px solid #F5F5F5'
                borderRadius='5px'
                boxShadow='24'
                p='25px'
            >
                <div className={`${styles.modal_content}`} style={{ width: '60em', maxWidth: '100%' }}>
                    <div className={`${styles.modal_header} mb-0`}>
                        <h5 className='mb-0' style={{
                            fontSize: '19px',
                            fontWeight: '700',

                        }}><span>Bankole Stephen</span></h5>
                        <span onClick={handleCloseViewAdmin} style={{ cursor: 'pointer' }}>
                            <img src="/assets/icons/x.svg" alt="" />

                        </span>

                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ounit">Email Address</label>
                            <div className="d-sm-flex">
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <TextField
                                            name="min_products"
                                            required
                                            type='email'
                                            id="ounit"
                                            value="jbennjoku@gmail.com"
                                            size="small"
                                            fullWidth
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ounit">Password</label>
                            <div className="d-sm-flex">
                                <div className="" style={{ width: '100%' }}>
                                    <div className={`${styles.showPasswordWrap} mb-4`}>
                                        <FormControl sx={{ width: '100%', p: 0 }} variant="outlined">
                                            <OutlinedInput
                                                value="jbennjoku"
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                readOnly
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="ml-sm-4 mt-3 mt-sm-0 text-right"><button className="btn btn-success text-white" style={{ whiteSpace: 'nowrap' }} onClick={() => { handleCloseViewAdmin(); setEditAdminModalOpen(true); }}>Edit Role</button></div>
                            </div>
                        </div>
                    </div>

                    <div className="alert alert-success text-center rounded p-2 mb-3">
                        <span className="text-success p-2 font-weight-bold">What this role can access</span>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Dashboard</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='viewDb'>User Can View Dashboard</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Driver</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='viewDriver'>User Can View Driver</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='manageDriver'>User Can Manage Driver</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Orders</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='viewDriver'>User Can View Orders</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='manageDriver'>User Can Manage Orders</label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Route</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='viewRoute'>User Can View Route</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='manageRoute'>User Can Manage Route</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='deleteRoute'>User Can Delete Route</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Operation</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='manageOpr'>User Can Manage Operation</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='viewOpr'>User Can View Operation</label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Vehicles</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='viewVehicle'>User Can View Vehicles</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='manageVehicle'>User Can Manage Vehicles</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ounit" className="text-muted">Charter</label>
                                <div className="" style={{ width: '100%' }}>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='viewCharter'>User Can View Charter</label>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className='d-flex m-0' style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <label className='mt-2 font-weight-normal' for='manageCharter'>User Can Manage Charter</label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GlobalModal>

        </>
    );
}
