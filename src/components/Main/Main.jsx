import React from "react";
import styles from "./Main.module.css";

import { useNavigate } from "react-router-dom";
function Main() {
  const userId = localStorage.getItem("userId");
  const userType = localStorage.getItem("userType");
  console.log(userId);
  const navigate = useNavigate();
  const handleSportClick = async (sportName) => {
    try {
      const response = await fetch(
        `/api/tournaments/${sportName}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/tournament", {
          state: { sportData: data, sportName: sportName },
        });
      }
    } catch (error) {
      console.error("Error fetching tournament data:", error);
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.backArrow}>
            <img src="arrow.png" alt="#" />
            <h1>SportDonation</h1>
          </div>
          <div className={styles.iconsContainer}>
            <img
              src="Notification.png"
              alt=""
              className={styles.notification}
            />
            <img
              src="search.png"
              alt=""
              className={styles.search}
              onClick={() => navigate("/Saerch")}
            />
          </div>
        </div>

        <div className={styles.navigationMenu}>
          <div className={styles.viewersBlock}>
            <p className={styles.viewersDecide}>ЗРИТЕЛИ РЕШАЮТ</p>
          </div>

          <div className={styles.votingBlock}>
            <p className={styles.hotVoting}>ГОРЯЧИЕ ГОЛОСОВАНИЯ</p>
          </div>
          <div className={styles.leadersBlock}>
            <p className={styles.donateLeaders}>ЛИДЕРЫ ДОНАТОВ</p>
          </div>
        </div>
        <h2>Дисциплины</h2>
        <div className={styles.sportsContainer}>
          <div className={styles.mma} onClick={() => handleSportClick("ММА")}>
            <img src="/img/mma.png" alt="" />
            <p>ММА</p>
          </div>
          <div
            className={styles.fisticuffs}
            onClick={() => handleSportClick("Кулачные бои")}
          >
            <img src="/img/Fisticuffs.png" alt="" />
            <p>Кулачные бои</p>
          </div>
          <div
            className={styles.kickbox}
            onClick={() => handleSportClick("Кикбокс")}
          >
            <img src="/img/kickbox.png" alt="" />
            <p>Кикбокс</p>
          </div>
          <div
            className={styles.muayThai}
            onClick={() => handleSportClick("Тайский бокс")}
          >
            <img src="/img/MuayThai.png" alt="" />
            <p>Тайский бокс</p>
          </div>
          <div
            className={styles.boxing}
            onClick={() => handleSportClick("Бокс")}
          >
            <img src="/img/kickbox.png" alt="" />
            <p>Бокс</p>
          </div>
          <div
            className={styles.wrestling}
            onClick={() => handleSportClick("Борьба")}
          >
            <img src="/img/mma.png" alt="" />
            <p>Борьба</p>
          </div>
        </div>
        <div className={styles.topMatchesHeader}>
          <h2>Топовые матчи</h2>
          <img src="forward.png" alt="" />
        </div>
        <div className={styles.games}>
          <div className={styles.game}>
            <img src="lightning.png" alt="" />
            <div className={styles.participants}>
              <p>Гришин М.</p>
              <p>Гонсалес Х.</p>
            </div>
          </div>
          <div className={styles.game}>
            <img src="lightning.png" alt="" />
            <div className={styles.participants}>
              <p>Маверик М.</p>
              <p>Хорт Дж-Л.</p>
            </div>
          </div>
          <div className={styles.game}>
            <img src="lightning.png" alt="" />
            <div className={styles.participants}>
              <p>Стирлинг Н.</p>
              <p>Токкос Г.</p>
            </div>
          </div>
          <div className={styles.game}>
            <img src="lightning.png" alt="" />
            <div className={styles.participants}>
              <p>Свонсон К.</p>
              <p>Куарантилло Б.</p>
            </div>
          </div>
        </div>
        <div className={styles.referralProgram}>
          <div className={styles.referralText}>
            <h2>Реферальная программа</h2>
            <p>Приглашай друзей и получай %% с каждого доната</p>
          </div>
          <img src="forward.png" alt="" />
        </div>
        <div className={styles.topFightersSection}>
          <div className={styles.headerSection}>
            <h2>Топ бойцов по сборам</h2>
            <p>Показать всех</p>
          </div>
          <div className={styles.fightersList}>
            <div className={styles.fighterItem}>
              <img src="Ritson.png" alt="" />
              <p>Ритсон Л.</p>
            </div>
            <div className={styles.fighterItem}>
              <img src="Norman.png" alt="" />
              <p>Норман Б.</p>
            </div>
            <div className={styles.fighterItem}>
              <img src="Oakford.png" alt="" />
              <p>Оукфорд Л.</p>
            </div>
            <div className={styles.fighterItem}>
              <img src="Stirling.png" alt="" />
              <p>Стирлинг Н.</p>
            </div>
          </div>
        </div>
        <div className={styles.topFightersSection}>
          <div className={styles.headerSection}>
            <h2>Топ бойцов по голосованию</h2>
            <p>Показать всех</p>
          </div>
          <div className={styles.fightersList}>
            <div className={styles.fighterItem}>
              <img src="Ritson.png" alt="" />
              <p>Ритсон Л.</p>
            </div>
            <div className={styles.fighterItem}>
              <img src="Norman.png" alt="" />
              <p>Норман Б.</p>
            </div>
            <div className={styles.fighterItem}>
              <img src="Oakford.png" alt="" />
              <p>Оукфорд Л.</p>
            </div>
            <div className={styles.fighterItem}>
              <img src="Stirling.png" alt="" />
              <p>Стирлинг Н.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomNav}>
        <div
          className={styles.catalogItem}
          onClick={() => {
            navigate("/main");
          }}
        >
          <img
            src="ui-checks-grid.png"
            alt=""
            className={styles.catalogImage}
          />
          <p className={styles.catalogText}>Каталог</p>
        </div>
        <div
          className={styles.catalogItem}
          onClick={() => {
            navigate("/alltournaments");
          }}
        >
          <img
            src="lightning-charge.png"
            alt=""
            className={styles.catalogImage}
          />
          <p className={styles.catalogText}>Турниры</p>
        </div>
        <div className={styles.catalogItem}>
          <img src="gift.png" alt="" className={styles.catalogImage} />
          <p className={styles.catalogText}>Рефералы</p>
        </div>
        <div
          className={styles.catalogItem}
          onClick={() => {
            if (userType === "fan") {
              navigate("/profileuser");
            } else {
              navigate("/profilefighter");
            }
          }}
        >
          <img src="person.png" alt="" className={styles.catalogImage} />
          <p className={styles.catalogText}>Профиль</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
