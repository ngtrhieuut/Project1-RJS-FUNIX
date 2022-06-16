import dateFormat from "dateformat";
import { STAFFS } from './staffs';

function Main() {

    // let numCol = 'accordion-item col-6 mt-2';
    
    // const handleClick2 = (e) => {
    //     return numCol = 'accordion-item col-6 mt-2'; 
    // }

    // const handleClick3 = (e) => {
    //     return numCol = 'accordion-item col-4 mt-2';
    // }

    // const handleClick6 = (e) => {
    //     return numCol = 'accordion-item col-2 mt-2';
    // }

    // console.log(numCol);
    
    return ( 
        <div className="m-2">
            <div className="card">
                <div className="card-header text-center fw-bold text-primary">
                    ỨNG DỤNG QUẢN LÝ NHÂN SỰ
                </div>
                {/* <div className="m-2">
                    <p className="m-2">Chọn cột hiển thị</p>
                    <button onClick={handleClick2}>2</button>
                    <button onClick={handleClick3}>3</button>
                    <button onClick={handleClick6}>6</button>
                </div> */}
                <div className="card-body accordion row">
                    {STAFFS.map(staff => (
                        <div className="accordion-item col-6 mt-2" key={staff.id}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + staff.id} aria-expanded="true" aria-controls="collapseOne">
                                    {staff.name}
                                </button>
                            </h2>
                            <div id={'collapse' + staff.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="fw-bold">Họ và Tên: {staff.name}</p>
                                    <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                                    <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                                    <p>Phòng ban: {staff.department.name}</p>
                                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Main;