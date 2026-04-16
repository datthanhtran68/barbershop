import React from 'react';
import { BRANCHES, SERVICES_OPTIONS } from '@/constants/booking';

function BookingForm() {
  return (
    <section className="booking_content">
      <div className="booking_content-grid">
        <div className="booking_form-wrapper">
          <h2 className="booking_section-title">Thông tin đặt lịch</h2>
          <p className="booking_section-subtitle">Điền vào biểu mẫu bên dưới và chúng tôi sẽ xác nhận đặt lịch của bạn</p>
          
          <form className="booking_form">
            <div className="form_group">
              <label>Họ và tên</label>
              <input type="text" placeholder="Nguyễn Văn A" />
            </div>

            <div className="form_group">
              <label>Số điện thoại</label>
              <input type="tel" placeholder="0931 456 789" />
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>Dịch vụ</label>
                <select defaultValue="">
                  <option value="" disabled>Chọn dịch vụ</option>
                  {SERVICES_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="form_group">
                <label>Cơ sở</label>
                <select defaultValue="">
                  <option value="" disabled>Chọn cơ sở</option>
                  {BRANCHES.map(branch => (
                    <option key={branch.name} value={branch.name}>{branch.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form_row">
              <div className="form_group">
                <label>Giờ mong muốn</label>
                <input type="time" />
              </div>
              <div className="form_group">
                <label>Ngày mong muốn</label>
                <input type="date" />
              </div>
            </div>

            <button type="submit" className="btn_submit">Gửi yêu cầu đặt lịch</button>
          </form>
        </div>

        <div className="booking_branches-wrapper">
          <h2 className="booking_section-title">Các cơ sở</h2>
          <p className="booking_section-subtitle">Ghé thăm một trong ba cơ sở thuận tiện của chúng tôi</p>
          
          <div className="branches_list">
            {BRANCHES.map((branch, index) => (
              <div key={index} className="branch_card">
                <h3>{branch.name}</h3>
                <p className="branch_address">{branch.address}</p>
                <p className="branch_phone">{branch.phone}</p>
                <p className="branch_hours">{branch.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
