import React, { useState } from 'react'
import { useEffect } from 'react';
import DatePicker from 'react-date-picker';
import { useNavigate, useParams } from 'react-router-dom'

import './index.css'

const TripCard = () => {
  const { PackageId } = useParams();
  const [boardLocation, setBoardLocation] = useState();
  const [destLocation, setToLocation] = useState(null);
  const [startDate, setStartDate] = useState();
  const [noOfPassengers, setNoOfPassengers] = useState(1);
  const [PassengersCompnents, setPassengersCompnents] = useState([]);
  const [flight, setFlight] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [rentalCar, setRentalCar] = useState(null);
  const [noOfDays, setNoOfDays] = useState(0);


  const navigate = useNavigate()

  useEffect(() => {
    let menuItems = [];
    console.log(!PackageId)

    for (let int = 0; int < noOfPassengers; int++) {
      menuItems.push(
        <div style={{ margin: "10px auto 40px auto" }} key={int}>
          <div className="items" style={{ display: "flex" }}>
            <div style={{ margin: "10px 10px" }}>
              <input type="text" name={`title${int}`} placeholder="title" style={{ padding: "10px" }} />
            </div>
            <div style={{ margin: "10px 10px" }}>
              <input type="text" name={`firstName${int}`} placeholder="Firstname" style={{ padding: "10px" }} />
            </div>
            <div style={{ margin: "10px 10px" }}>
              <input type="text" name={`lastName${int}`} placeholder="Lastname" style={{ padding: "10px" }} />
            </div>
          </div>
          <div className="items" style={{ display: "flex" }}>
            <div style={{ margin: "10px 10px" }}>
              <input type="text" name={`age${int}`} placeholder="Age" style={{ padding: "10px" }} />
            </div>
            <div style={{ margin: "10px 10px" }}>
              <input type="text" name={`cnic${int}`} placeholder="CNIC" style={{ padding: "10px" }} />
            </div>
            <div style={{ margin: "10px 10px" }}>
              <input type="text" name={`phNumber${int}`} placeholder="Phone Number" style={{ padding: "10px" }} />
            </div>
          </div>
        </div>
      );
    }
    setPassengersCompnents(menuItems)
  }, [noOfPassengers, boardLocation])

  const check = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target)

    const details = []

    for (let i = 0; i < noOfPassengers; i++) {
      const detail = {
        title: data.get(`title${i}`),
        firstName: data.get(`firstName${i}`),
        lastName: data.get(`lastName${i}`),
        age: data.get(`age${i}`),
        cnic: data.get(`cnic${i}`),
        phNumber: data.get(`phNumber${i}`),
      }
      details.push(detail);
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/bookings`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        booking: {
          PackageId,
          boardLocation,
          startDate,
          noOfPassengers,
          noOfDays,
          flight: flight,
          hotel: hotel,
          rentalCar: rentalCar,
          destLocation: destLocation
        },
        passengers: details
      })
    })

    if (res.status == 201) {
      console.log(await res.json())
      navigate('/booking-confirmation', { replace: true })
    }
  }

  return (
    <>

      <article className='trip__card'>
        <div className="trip__title">TRIP DETAILS</div>
        <div className="trip__details">

          <main className='trip__from'>
            <div className="trip__way">From</div>
            <div className="from__city">
              <input type="text" value={boardLocation} onChange={(e) => setBoardLocation(e.target.value)} />
            </div>
          </main>
          <main className="" style={{ width: "30vw" }}>
            <div className="trip__way">Departure</div>
            <div className="from__city">
              <DatePicker style={{ fontSize: "18px" }} onChange={setStartDate} value={startDate} />
            </div>
          </main>
          {!PackageId && (
            <>
              <main className='trip__from'>
                <div className="trip__way">To</div>
                <div className="from__city">
                  <input type="text" onChange={(e) => setToLocation(e.target.value)} />
                </div>
              </main>
            </>
          )}
          <main>
            <div className="trip__way">No. of Passengers</div>
            <div className="from__city">
              <input type="number" value={noOfPassengers} min="1" onChange={(e) => setNoOfPassengers(e.target.value)} />
            </div>
          </main>
          <main>
            <div className="trip__way">No. of Days</div>
            <div className="from__city">
              <input type="number" value={noOfDays} onChange={(e) => setNoOfDays(e.target.value)} />
            </div>
          </main>
        </div>
        {!PackageId && (
          <div style={{ display: "flex" }}>
            <main className='trip__from'>
              <div className="trip__way">Flight</div>
              <div className="from__city">
                <input type="checkbox" onChange={(e) => setFlight(e.target.checked)} />
              </div>
            </main>
            <main className='trip__from'>
              <div className="trip__way">Hotel</div>
              <div className="from__city">
                <input type="checkbox" onChange={(e) => setHotel(e.target.checked)} />
              </div>
            </main>
            <main className='trip__from'>
              <div className="trip__way">Rental Car</div>
              <div className="from__city">
                <input type="checkbox" onChange={(e) => setRentalCar(e.target.checked)} />
              </div>
            </main>
          </div>
        )}
        <main>
          <div className="trip__way">Passengers Details</div>
          <form id='passengers' onSubmit={check}>
            {PassengersCompnents}
          </form>
        </main>
        <main>
          <button type='submit' form="passengers" className="btn" style={{ color: "white" }}>
            Booking
          </button>
        </main>
      </article>
    </>
  )
}

export default TripCard