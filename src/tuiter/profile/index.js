import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state=>state.profile)
    return(
        <div className={"border-start border-end border-bottom pb-2 rounded-bottom"}>
            <div className={"row"}>
                <div className={"col-1 d-flex align-items-center"}>
                    <Link to={"/tuiter/home"} className={"text-decoration-none text-muted"}>
                        <h4><i className="bi bi-arrow-left ms-2"></i></h4>
                    </Link>
                </div>
                <div className={"col"}>
                    <h4 className={"fw-bold wd-no-space"}>{profile.firstName} {profile.lastName}</h4>
                    <span className={"text-muted"}>{profile.tweets} Tweets</span>
                </div>
            </div>

            <div className={"row"}>
                <div>
                    <img className="rounded-circle wd-no-space position-absolute border border-light ms-4 wd-profile-pic"
                         height={"133px"} src={profile.profilePicture}/>
                    <img src={profile.bannerPicture} className={"w-100"} height={"180px"}/>
                </div>
                <div className="col-7">
                </div>
                <div className={"col-5"}>
                    <Link to="/tuiter/edit-profile" className={"btn fw-bold rounded-pill float-end border mt-2 me-2"}>
                        Edit Profile
                    </Link>
                </div>
            </div>

            <div className={"row ms-2 mt-4 me-2"}>
                <div className={"col"}>
                    <h4 className={"fw-bold wd-no-space"}>{profile.firstName} {profile.lastName}</h4>
                    <span className={"text-muted"}>{profile.handle}</span>
                    <p className={"pt-3"}>{profile.bio}</p>
                </div>
            </div>

            <div className={"row ms-2"}>
                <div className="text-muted">
                    <span className="me-2">
                        <i className="bi bi-geo-alt me-1"></i>
                        {profile.location}
                    </span>
                    <span className="me-3">
                        <i className="bi bi-balloon me-1"></i>
                        Born {profile.dateOfBirth}
                    </span>
                    <span className="">
                        <i className="bi bi-calendar3 me-1"></i>
                        Joined {profile.dateJoined}
                    </span>
                </div>
            </div>

            <div className={"row ms-2 mt-1"}>
                <span>
                    <span className={"fw-bold me-1"}>{profile.followingCount}</span>
                    <span className={"text-muted me-2"}>Following</span>
                    <span className={"fw-bold me-1"}>{profile.followersCount}</span>
                    <span className={"text-muted me-2"}>Followers</span>
                </span>
            </div>


        </div>
    )
}



export default ProfileComponent;