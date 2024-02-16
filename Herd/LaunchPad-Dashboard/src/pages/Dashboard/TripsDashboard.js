/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Helmet } from 'react-helmet-async';
// import * as Router from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

import {
  Card,
  CardContent,
  Typography,
  // Button 
} from '@mui/material';

//Carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";
import GlobalModal from "../../Modals/GlobalModal";
import styles from './Page.module.css'
import Filter1 from '../Filter/Filter1';

import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleCloseViewFilter = () => {
      setFilterModalOpen(false);
  };

  const [chartOptions] = useState({
    chart: {
      type: 'bar'
    },
    colors: ['rgba(0, 175, 82, 1)', 'rgba(0, 175, 82, .7)', 'rgba(0, 175, 82, .4)'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end'
      },
    },
    xaxis: {
      categories: ['Nigeria', 'Ghana', 'South Africa', 'Egypt', 'Benin', 'Liberia', 'Togo', 'Sierrelone', 'Senegal'],
    },

    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter(val) {
          return `$ ${val}`
        }
      }
    },
    dataLabels: {
      enabled: false,
    }
  })
  const [chartSeries] = useState(
    [{
      name: 'Order',
      data: [900, 550, 800, 810, 810, 600, 400, 400]
    },
    {
      name: 'Depletion',
      data: [800, 700, 600, 500, 800, 700, 650, 600]
    },
    {
      name: 'In-stock',
      data: [650, 700, 750, 890, 800, 400, 350, 480]
    }]
  );

  // for carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    fade: true,
    scrollBar: false
  };


  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>
      <div className='wrapper mt-md-3'>
        <div className={`${styles.header} d-block d-md-none mb-4 mt-3 pt-2`}>
          <h4 className={`mb-0 pb-0`}>Dashboard</h4>
          <p style={{ fontSize: '14px' }} className={`mb-0 pb-0`}>
            An overview of your business performance
          </p>

        </div>


        {/* Banner */}
        <div style={{ overflow: 'hidden' }}>
          <Slider {...settings}>
            <div>
              <Typography variant="h3" className={`${styles.banner} border`}>
                <div>
                  <h2 className='text-white font-weight-bold'>Welcome to Rabbit</h2>
                  <h5 className='text-white font-weight-bold pl-md-4 mb-0'>Stress free . Commute . Delivery</h5>
                </div>
                <div className={`${styles.banner_img}`}>
                  <img src='/assets/dashboard_img.png' alt='' />
                </div>
                {/* <img src="/assets/icons/bannerImageOne.png" className={`${styles.banner_img1}`} alt="" /> */}
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className={`${styles.banner_sec} border bg-primary`}>
                <div className='px-5'>
                  <img src='/assets/rabbit_white.png' className='img-fluid img-responsive' alt='' />
                  {/* <h2 className='text-white font-weight-bold'>Welcome to Logistics</h2>
                      <h5 className='text-white font-weight-bold pl-md-4 mb-0'>Stress free . Commute . Delivery</h5> */}
                </div>
                {/* <div className={`${styles.banner_img}`}>
                    <img src='/assets/dashboard_img.png' alt='' />
                  </div> */}
                {/* <img src="/assets/icons/bannerImageOne.png" className={`${styles.banner_img1}`} alt="" /> */}
              </Typography>
            </div>
            {/* <div>
              <Typography variant="h3" className={`${styles.banner}`}>
                <img src="/assets/icons/bannerImageTwo.png" alt="logo" className={`${styles.banner_img1}`}/>
              </Typography>
            </div> */}
          </Slider>
        </div>

        {/* <div className={styles.landing} /> */}
        <div className="row mt-4">
          <div className="col-md-7 mb-2">
            <Filter1 width='100%' />

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className={`${styles.card}`}>
                  <div className={`card-body`}>
                    <div className="d-flex justify-content-between">
                      <small>Customers</small>
                    </div>
                    <div className={`${styles.numbers}`}>
                      <div>
                        <span className='primary_color'>1,206</span><small> from 1,021</small>
                      </div>
                      <div>
                        <div style={{
                          width: '67px',
                          height: '25px',
                          borderRadius: '12px',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: ' space-around'
                        }} className={styles.percent}>
                          <img src="/assets/icons/up.svg" alt="" /> <small>12%</small>

                        </div>
                      </div>



                    </div>

                  </div>


                </div>

              </div>
              <div className="col-md-6 mb-4">
                <div className={`${styles.card}`}>
                  <div className={`card-body`}>
                    <div className="d-flex justify-content-between">
                      <small>Drivers</small>
                    </div>
                    <div className={`${styles.numbers}`}>
                      <div>
                        <span className='primary_color'>1,206</span><small> from 1,021</small>
                      </div>
                      <div>
                        <div style={{
                          width: '67px',
                          height: '25px',
                          borderRadius: '12px',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: ' space-around'
                        }} className={styles.percent}>
                          <img src="/assets/icons/up.svg" alt="" /> <small>12%</small>

                        </div>
                      </div>



                    </div>

                  </div>


                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={`${styles.card}`}>
                  <div className={`card-body`}>
                    <div className="d-flex justify-content-between">
                      <small>Routes</small>
                    </div>
                    <div className={`${styles.numbers}`}>
                      <div>
                        <span className='primary_color'>1,206</span><small> from 1,021</small>
                      </div>
                      <div>
                        <div style={{
                          width: '67px',
                          height: '25px',
                          borderRadius: '12px',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: ' space-around'
                        }} className={styles.percent}>
                          <img src="/assets/icons/up.svg" alt="" /> <small>12%</small>

                        </div>
                      </div>



                    </div>

                  </div>


                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={`${styles.card}`}>
                  <div className={`card-body`}>
                    <div className="d-flex justify-content-between">
                      <small>Bookings</small>
                    </div>
                    <div className={`${styles.numbers}`}>
                      <div>
                        <span className='primary_color'>1,206</span><small> from 1,021</small>
                      </div>
                      <div>
                        <div style={{
                          width: '67px',
                          height: '25px',
                          borderRadius: '12px',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: ' space-around'
                        }} className={styles.percent}>
                          <img src="/assets/icons/up.svg" alt="" /> <small>12%</small>

                        </div>
                      </div>



                    </div>

                  </div>


                </div>
              </div>
            </div>

          </div>
          <div className="col-md-5 mb-2 pb-md-4">
            <div className='h-100' >
              <div className={`${styles.card2} card pt-2 h-100`} style={{ borderRadius: '6px', minHeight: '17em' }}>
                <div className={`${styles.wallet}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                  <div className='mx-auto' style={{ position: 'relative', width: '26em', maxWidth: '100%' }}>
                    <img className={`${styles.img} ${styles.img1}`} style={{ position: 'absolute', inset: '0', top: '0', left: '0', right: '0', bottom: '0' }} src="/assets/crc.png" alt="" />
                    <div className={`${styles.content}`}>
                      <div className={`${styles.content_header}`}>
                        <div>
                          ₦‎ 26,500,853
                        </div>
                        <div>
                          <img src="/assets/icons/Vector.svg" alt="" />
                        </div>

                      </div>
                      <p className={`${styles.sub_text}`}>
                        Your Balance
                      </p>
                      <div className={`${styles.content_body} ${styles.content_body2} mt-5`}>
                        <p className={`${styles.sub_text} m-0 mb-1`}>
                          Account Details
                        </p>

                        <div className={`${styles.bank_info} `}>
                          <div >
                            <p className={`${styles.name} m-0`}>
                              NESTLE INTERNATIONAL PLC.

                            </p>
                            <p className={`${styles.account_number} m-0`}>
                              0231609769
                            </p>

                          </div>
                          <img className="" src="/assets/logo.svg" alt="" />
                          {/* <span style={{
                              fontSize:'14px', 
                              fontWeight:'700', 
                              color:'#FFFFFF'
                            }}>
                              {dashboardData?.wallet_info?.brand_id?.bank_name}
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className={`${styles.footer} ${styles.footer2}`}>
                    <div className="">
                      <p className="mb-0 pb-0">
                        <Link
                          // href="/app/wallets"
                          href="/admin"
                        >
                          Manage Wallet
                          <iconify-icon icon="ph:arrow-right" style={{ fontSize: '1.5em', lineHeight: '0', marginLeft: '5px', verticalAlign: 'middle' }}></iconify-icon>
                          &nbsp;

                        </Link>


                      </p>

                    </div>

                  </div> */}

                </div>

              </div>
            </div>

          </div>
        </div>
        <Card style={{ marginTop: '50px', marginBottom: '20px', borderRadius: '10px' }} className='p-0'>
          <CardContent>
            <div className={`${styles.insight_header} pl-md-5`}>
              <h5 className='mb-2'>
                Customers, Bookings and Income stats

              </h5>
              <div className="d-md-flex justify-content-between">
                <p>
                  Compare insights from activities ranging from <br /> customers bookings to income statements.
                  {/* Compare your orders against the depletion rate and <br /> what is left in stock in your Stores. */}
                </p>
                <div className="d-flex">
                  <div className="dropleft ">
                    <button type='button' className="btn  border" 
                      onClick={() => setFilterModalOpen(true)}
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid #D0D5DD',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        borderRadius: '4px'
                      }}>
                      <img className="" style={{ display: 'inline', width: '20px' }} src="/assets/icons/filterlines.svg" alt="" />
                      &nbsp;
                      <small className="d-none d-md-inline-block">
                        Filters
                      </small>
                    </button>

                  </div>
                  &nbsp;
                  &nbsp;
                  <div className="dropleft ">
                    <button type='button' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} btn m-0 py-0`}>
                      <span style={{
                        paddingTop: '8px',


                      }}>
                        <img style={{ display: 'inline', width: '18%' }} src="/assets/icons/download.svg" alt="" /> &nbsp;
                        Export
                      </span>
                      &nbsp;
                      &nbsp;
                      <span style={{
                        borderLeft: '1px solid white',
                        display: 'inline-block',
                        height: 'inherit',
                        paddingTop: '8px',
                        paddingLeft: '8px',
                        textAlign: 'center',

                      }}>
                        <img src="/assets/icons/arrowDown.svg" alt="" />

                      </span>


                    </button>

                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                      <button type="button" className="rss dropdown-item btn border-0">CSV</button>
                      <button type="button" className="rss dropdown-item btn border-0">Excel </button>
                    </div>
                  </div>
                </div>

              </div>
              <div className="row mt-md-0 mt-4">
                <div className="col-md-8 mb-2"
                // style={{border: '2px solid blue'}}
                >
                  <div className="row">
                    <div className="col-md-12 mb-2">
                      <div className="d-lg-flex d-block" style={{ gap: '20px' }}>
                        <div className="d-block">
                          <div className="card p-0" style={{ minWidth: '20em', height: '35px' }}  >
                            <div className="card-body d-flex justify-content-around  py-1" style={{ whiteSpace: 'nowrap' }}>
                              <div className='d-inline m-0'>  
                                <input className="" type="radio" name="insight_depletion" id="ov1" /> 
                                <label htmlFor="ov1">
                                  Overall
                                </label>
                              </div>
                              <div className='d-inline m-0'>  
                                <input className="" type="radio" name="insight_depletion" id="year1" /> 
                                <label htmlFor="year1">
                                  Yearly
                                </label>
                              </div>
                              <div className='d-inline m-0'>  
                                <input className="" type="radio" name="insight_depletion" id="month1" /> 
                                <label htmlFor="month1">
                                  Monthly
                                </label>
                              </div>
                            </div>

                          </div>

                        </div>
                        <div className="d-block">
                          <div className="m-0">
                            <div className="mt-2">
                              <div className="p-0 mx-auto mt-3 mt-lg-0" style={{ width: 'fit-content' }}>
                                <span>
                                  <span className={`${styles.arrowSpan}`}>
                                    <img width={'20px'} src="/assets/icons/left_arrow.svg" alt="arrow" className={`${styles.newStyle} mr-2`} />
                                  </span>
                                  <span className={`${styles.year_styles}`}>2023</span>
                                  <span className={`${styles.arrowSpan}`}>
                                    <img width={'20px'} src="/assets/icons/right_arrow.svg" alt="arrow" className={`${styles.newStyle} ml-2`} />
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-between text-md-right mt-4 mt-md-0" style={{ whiteSpace: 'nowrap', maxWidth: '20em' }}>
                  <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <p className='rounded-circle d-inline m-0' style={{width: '10px', height: '10px', background: 'rgba(0, 175, 82, 1)'}}>.</p>
                    &nbsp;
                    Users
                  </span>
                  &nbsp;
                  <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <p className='rounded-circle d-inline m-0' style={{width: '10px', height: '10px', background: 'rgba(0, 175, 82, .7)'}}>.</p>
                    &nbsp;
                    Bookings
                  </span>
                  &nbsp;
                  <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <p className='rounded-circle d-inline m-0' style={{width: '10px', height: '10px', background: 'rgba(0, 175, 82, .4)'}}>.</p>
                    &nbsp;
                    Income
                  </span>


                </div>
              </div>
            </div>

            <ReactApexChart type="bar" series={chartSeries} options={chartOptions} height={500} />

          </CardContent>

        </Card>


        {/* Filter Modal */}

        <GlobalModal
          open={filterModalOpen}
          onClose={handleCloseViewFilter}
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          width='740px !important'
          overflowY='scroll'
          bgcolor='#FFFFFF'
          border='1px solid #F5F5F5'
          borderRadius='5px'
          boxShadow='24'
          p='25px'
        >
          <div className={`${styles.modal_content}`}>
            <div className={`${styles.modal_header} mb-0`}>
              <h5 style={{
                fontSize: '19px',
                fontWeight: '700',
              }}>Filter</h5>
              <span onClick={handleCloseViewFilter} style={{ cursor: 'pointer' }}>
                <img src="/assets/icons/x.svg" alt="" />
              </span>
            </div>
            {/* <form action="" className="mt-3"> */}
              <div className="row">
                <div className="col-md-6 mb-1">
                  <div className="mb-3">
                    <label htmlFor="name">Transaction Id</label>
                    <Select
                      labelId="s"
                      id="s"
                      fullWidth
                      size="small"
                      required
                      name="verified"
                      defaultValue='select'
                    >

                      <MenuItem value='select'>Enter Transaction Id</MenuItem>
                      <MenuItem value='142282'>142282</MenuItem>
                      <MenuItem value='182282'>182282</MenuItem>
                      <MenuItem value='228828'>228828</MenuItem>
                    </Select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name">Status</label>
                    <Select
                      labelId="s"
                      id="s"
                      fullWidth
                      size="small"
                      required
                      name="verified"
                      defaultValue='select'
                    >

                      <MenuItem value='select'>Select Status</MenuItem>
                      <MenuItem value='pending'>Pending</MenuItem>
                      <MenuItem value='verified'>Verified</MenuItem>
                    </Select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name">Type</label>
                    <Select
                      labelId="s"
                      id="s"
                      fullWidth
                      size="small"
                      required
                      name="verified"
                      defaultValue='select'
                    >

                      <MenuItem value='select'>Select Type</MenuItem>
                      <MenuItem value='logistics'>Logistics</MenuItem>
                      <MenuItem value='trips'>Trips</MenuItem>
                      <MenuItem value='interstate'>Interstate</MenuItem>
                    </Select>
                  </div>
                </div>
                <div className="col-md-6 mb-1">
                  <label htmlFor="ounit">Amount</label>
                  <div className=" d-flex">
                    <div className="" style={{ width: '100%' }}>
                      <div className="mb-3">
                        <TextField
                          name="min_products"
                          required
                          type='number'
                          id="ounit"
                          placeholder="Min"
                          size="small"

                        />
                      </div>
                    </div>
                    <div className="px-1 d-flex   align-items-center " style={{ height: '40px' }}>
                      <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                    </div>
                    <div className="" style={{ width: '100%' }}>
                      <div className="mb-3">
                        <TextField
                          required
                          name="max_products"
                          type='number'
                          placeholder="Max "
                          size="small"

                        />
                      </div>
                    </div>
                  </div>
                  <label htmlFor="ounit">Date</label>

                  <div className=" d-flex">
                    <div className="" style={{ width: '100%' }}>
                      <div className="mb-3">
                        <DatePicker
                          showIcon
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="dd/MM/yyyy"
                          className="form-control"
                          placeholderText="Start"
                          required
                        />
                      </div>
                    </div>
                    <div className="px-1 d-flex   align-items-center " style={{ height: '40px' }}>
                      <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                    </div>
                    <div className="" style={{ width: '100%' }}>
                      <div className="mb-3">
                        <DatePicker
                          showIcon
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          dateFormat="dd/MM/yyyy"
                          className="form-control"
                          placeholderText="End"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button type="button" className={`${styles.modal_btn} btn btn-block btn-success`}>
                  Proceed
                </button>
              </div>
            {/* </form> */}
          </div>
        </GlobalModal>

      </div>

    </>
  );
}
