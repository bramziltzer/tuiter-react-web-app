import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateProfile} from "../reducers/profile-reducer";
import {useState} from "react";

export default function EditProfileComponent () {
    const profile = useSelector(state=>state.profile)
    const dispatch = useDispatch();
    const[info, setInfo] = useState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        bio: profile.bio,
        location: profile.location,
        website: profile.website,
        birthday: profile.dateOfBirth
    }
    )
    const saveClickHandler = () => {
        dispatch(updateProfile(info))
    }

    const changeHandler = (event) => {
        // reference: https://stackoverflow.com/questions/59813926/how-can-i-store-and-update-multiple-values-in-react-usestate
        setInfo({...info, [event.target.name]: event.target.value})
        // console.log(event.target.name + ":" + event.target.value)
    }

    return(
        <div className={"border-start border-end border-bottom pb-2 rounded-bottom"}>
            <div className={"row me-1 align-items-center mb-2"}>
                <div className={"col-1 ms-2"}>
                    <Link to={"/tuiter/profile"} className={"text-decoration-none text-dark"}>
                        <h2><i className="bi bi-x"></i></h2>
                    </Link>
                </div>
                <div className={"col"}>
                    <h4 className={"fw-bold"}>Edit Profile</h4>
                </div>
                <div className={"col"}>
                    <Link to={"/tuiter/profile"} onClick={()=>saveClickHandler()} className={"btn btn-dark fw-bold rounded-pill float-end mb-2"}>
                        Save
                    </Link>
                </div>
            </div>

            <div className={"row"}>
                <div className={"mb-5 col"}>
                    <img className="rounded-circle wd-no-space position-absolute border border-light ms-4 wd-profile-pic"
                         height={"133px"} src={profile.profilePicture}/>
                    <img src={profile.bannerPicture} className={"w-100"} height={"180px"}/>
                    <div className={"position-absolute wd-edit-profile-pic"}>
                        <i className="bi bi-camera text-white fs-4 p-3 rounded-circle bg-dark bg-opacity-75"></i>
                    </div>
                    <div className={"w-100 position-absolute wd-edit-banner-pic "}>
                        <i className="bi bi-camera text-white fs-4 p-3 me-2 rounded-circle bg-dark bg-opacity-75"></i>
                        <i className="bi bi-x text-white fs-4 p-3 rounded-circle bg-dark bg-opacity-75"></i>
                    </div>
                </div>
            </div>

            <div className={"row ms-1 me-1 border-0 mt-4"}>
                <div className={"col-6 mb-3"}>
                    <div className={"position-absolute ps-2 pt-1 text-muted fw"}>First Name</div>
                    <input className={"w-100 rounded-3 ps-2 pt-4 form-control"} title={"First Name"}
                           name={"firstName"}
                           value={info.firstName}
                           onChange={changeHandler}/>
                </div>
                <div className={"col-6 mb-3"}>
                    <div className={"position-absolute ps-2 pt-1 text-muted fw"}>Last Name</div>
                    <input className={"w-100 rounded-3 ps-2 pt-4 form-control"} title={"Last Name"}
                           name={"lastName"}
                           value={info.lastName}
                           onChange={changeHandler}/>
                </div>

                <div className={"mb-3"}>
                    <div className={"position-absolute ps-2 pt-1 text-muted"}>Bio</div>
                    <textarea className={"w-100 rounded-3 ps-2 pt-4 form-control"} title={"Bio"}
                              name={"bio"}
                              value={info.bio}
                              onChange={changeHandler}></textarea>
                </div>
                <div className={"mb-3"}>
                    <div className={"position-absolute ps-2 pt-1 text-muted"}>Location</div>
                    <input className={"w-100 rounded-3 ps-2 pt-4 form-control"} title={"Location"}
                           name={"location"}
                           value={info.location}
                           onChange={changeHandler}/>
                </div>
                <div className={"mb-3"}>
                    <div className={"position-absolute ps-2 pt-1 text-muted"}>Website</div>
                    <input className={"w-100 rounded-3 ps-2 pt-4 form-control"} title={"Website"}
                           name={"website"}
                           value={info.website}
                           onChange={changeHandler}/>
                </div>
                <div className={"mb-3"}>
                    <div className={"position-absolute ps-2 pt-1 text-muted"}>Birth Date</div>
                    <input className={"w-100 rounded-3 ps-2 pt-4 form-control"} title={"Birth Date"}
                           name={"birthday"}
                           value={info.birthday}
                           onChange={changeHandler}/>
                </div>

            </div>


        </div>
    )
}