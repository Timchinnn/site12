import React, { useState, useEffect } from "react";
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
  const [topFighters, setTopFighters] = useState([]);
  useEffect(() => {
    const fetchTopFighters = async () => {
      try {
        const response = await fetch("/api/top-fighters");
        if (response.ok) {
          const data = await response.json();
          setTopFighters(data);
        }
      } catch (error) {
        console.error("Error fetching top fighters:", error);
      }
    };

    fetchTopFighters();
  }, []);
  const [topVotedFighters, setTopVotedFighters] = useState([]);
  useEffect(() => {
    const fetchTopVotedFighters = async () => {
      try {
        const response = await fetch(
          "/api/top-voted-fighters"
        );
        if (response.ok) {
          const data = await response.json();
          setTopVotedFighters(data);
        }
      } catch (error) {
        console.error("Error fetching top voted fighters:", error);
      }
    };

    fetchTopVotedFighters();
  }, []);
  const [topMatches, setTopMatches] = useState([]);
  useEffect(() => {
    const fetchTopMatches = async () => {
      try {
        const response = await fetch("/api/top-matches");
        if (response.ok) {
          const data = await response.json();
          setTopMatches(data);
        }
      } catch (error) {
        console.error("Ошибка при получении топовых матчей:", error);
      }
    };

    fetchTopMatches();
  }, []);const handleFighterClick = (fighter) => {
    navigate("/StatsFighterFan", {
      state: {
        fighterData: fighter
      }
    });
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.backArrow}>
            <img src="arrow.png" alt="#" onClick={() => navigate(-1)} />
            <h1>SportDonation</h1>
          </div>
          <div className={styles.iconsContainer}>
            <img
              src="Notification.png"
              alt=""
              className={styles.notification}
              onClick={() => {
                navigate("/Notifications");
              }}
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
            onClick={() => handleSportClick("Кикбоксинг")}
          >
            <img src="/img/kickbox.png" alt="" />
            <p>Кикбоксинг</p>
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
          {topMatches.slice(0, 4).map((match, index) => (
            <div key={index} className={styles.game}>
              <img src="lightning.png" alt="" />
              <div className={styles.participants}>
                <p>{match.competitor_1}</p>
                <p>{match.competitor_2}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.referralProgram}>
          <div className={styles.referralText}>
            <h2>Реферальная программа</h2>
            <p>Приглашай друзей и получай %% с каждого доната</p>
          </div>
          <img
            src="forward.png"
            alt=""
            onClick={() => {
              navigate("/Referal");
            }}
          />
        </div>
        <div className={styles.topFightersSection}>
          <div className={styles.headerSection}>
            <h2>Топ бойцов по сборам</h2>
            <p>Показать всех</p>
          </div>
          <div className={styles.fightersList}>
            {topFighters.map((fighter) => (
              <div key={fighter.id} className={styles.fighterItem} onClick={() => handleFighterClick(fighter)}>
                <img
                  src={
                    fighter.photo_url
                      ? `${fighter.photo_url}`
                      : "Avatar.png"
                  }
                  alt={fighter.name}
                />
                <p>
                  {fighter.name} {fighter.surname[0]}.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.topFightersSection}>
          <div className={styles.headerSection}>
            <h2>Топ бойцов по голосованию</h2>
            <p>Показать всех</p>
          </div>
          <div className={styles.fightersList}>
            {topVotedFighters.map((fighter) => (
              <div key={fighter.id} className={styles.fighterItem} onClick={() => handleFighterClick(fighter)}>
                <img
                  src={
                    fighter.photo_url
                      ? `${fighter.photo_url}`
                      : "Avatar.png"
                  }
                  alt={fighter.name}
                />
                <p>
                  {fighter.name} {fighter.surname[0]}.
                </p>
              </div>
            ))}
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
        <div
          className={styles.catalogItem}
          onClick={() => {
            navigate("/Referal");
          }}
        >
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
