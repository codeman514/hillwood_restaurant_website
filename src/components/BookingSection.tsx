import { useEffect, useState } from "react";
import axios from "axios";
export default function BookingSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSendCallbackModal, setSendCallbackModal] = useState(false);
  const [callbackMessage, setCallbackMessage] = useState("");
  const [menu, setMenu] = useState<any[]>(() => {
    const bookedMenu = localStorage.getItem("bookedMenu");
    return bookedMenu ? JSON.parse(bookedMenu) : [];
  });
  useEffect(() => {
    const initBooking = async () => {
      const response = await axios.get("/api/getMenu");
      setMenu(
        response.data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          amount: 0,
        })),
      );
    };
    if (menu.length === 0) {
      initBooking();
    } else {
      localStorage.setItem("bookedMenu", JSON.stringify(menu));
    }
  }, [menu]);
  const onClickBooking = () => {
    setShowConfirmModal(true);
  };
  const onClickSendBooking = async () => {
    const bookedJson = JSON.stringify(
      menu.reduce(
        (sum: any, item: any) => ({
          ...sum,
          [item.name]: item.amount,
        }),
        {},
      ),
    );
    const response = await axios.post("/api/booking", {
      name,
      phone,
      bookedJson,
    });
    setSendCallbackModal(true);
    setCallbackMessage(response.data.message);
  };
  //當點擊關閉彈窗
  const onClickCloseModal = () => {
    setShowConfirmModal(false);
    setSendCallbackModal(false);
  };
  const addAmount = (id: number) => {
    setMenu((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item,
      ),
    );
  };
  const minusAmount = (id: number) => {
    setMenu((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, amount: Math.max(item.amount - 1, 0) }
          : item,
      ),
    );
  };
  return (
    <section>
      {menu.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <button onClick={() => minusAmount(item.id)}>-</button>
            {item.amount}
            <button onClick={() => addAmount(item.id)}>+</button>
          </div>
        );
      })}
      <button onClick={onClickBooking}>訂購</button>
      {showConfirmModal && (
        <div className="custom-modal-overlay">
          <div className="custom-booking-confirm-modal d-flex flex-column justify-content-center align-items-center">
            填寫外賣資訊
            <label>
              姓名：
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              電話：
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <div>
              <button onClick={onClickSendBooking}>確定送出</button>
              <button onClick={() => setShowConfirmModal(false)}>取消</button>
            </div>
          </div>
        </div>
      )}
      {showSendCallbackModal && (
        <div className="custom-modal-overlay">
          <div className="custom-send-callback-modal d-flex justify-content-center align-items-center">
            <div>
              {callbackMessage}
              <button className="d-block" onClick={onClickCloseModal}>
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
