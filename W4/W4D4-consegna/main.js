window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const btnToggle = document.querySelector(".button-toggle");
const menuToggle = document.querySelector(".menu-toggle");

btnToggle.addEventListener("mouseenter", () => {
  menuToggle.classList.add("show");
});

btnToggle.addEventListener("mouseleave", () => {
  menuToggle.classList.remove("show");
});

menuToggle.addEventListener("mouseenter", () => {
  menuToggle.classList.add("show");
});

menuToggle.addEventListener("mouseleave", () => {
  menuToggle.classList.remove("show");
});

const filmsSeriePremiate = [
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb7T0AQAvN3TK0Y_wgTwVsKYs-ijUbNTD0dbaQu68rkWzd61T3_Inm-Hw-23Wu74iei_XLwMIPC6wSZw2_gdiQJTBNKOp-mRxoQ.webp?r=f2a",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRTlf3FR5oEoSDQxmWWD85KhRk91MIkpeEOf9T1hWetmkMLzWuHj-Qm3ZbJ8p3FzTlIXfQznFvtbn6_O2qsYr5pLo_BLLxzWUUo.webp?r=47d",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVLDgogqpCjno6cUaSzY5WH2ibvqYeN2DYg0B4YBdopFjdc-Apre7z7RY9lg4_hwfXPKjJX8EkWNzwBzNxFyYvUG97IFE44tQgw.webp?r=22b",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX4c1Db3nL9ByB_C_RRkIKSFItihyuch5XOk_VdznE58iOY9M2d5F68jxBkQfIqQxwRGOAD1oyKhEwL6sxd8tabuUBATVHcXRTcV41XpCgGfvB79nDBe5Idw-LkXYD7Q9WgZ.jpg?r=f4e",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRfr4c2zAcbcrUBPSYy3sigtabktDbJ2aQglchPVW-ASoFOwSY6GqPNHaaHFB03IaNpsMo7PSFO3mSYKRU6-KDQpCU3obgESas4.webp?r=46d",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVECm-FFttdKBgd9hf7Z8ehDxVM9Kf15scsW6o2_oXbiFzAXsVRB9Lc5vGU_BRHM4_wHYWJrOfbSQ3N1aGNxbXKl6TfHqmb9N53c8pL23hcNncilTflR7u7-PLa6SvPyZxmH.jpg?r=443",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWs6hlPdOHDEe-OkUyNiBW4jdq3P2dxjiAp8z_xyEK3mbPWpBH0rQ2DcawzRGviJo4ALJL58jeSOr7rzv8QfoPN52YCJbmyVnxIUbwHqeX7aoTpqBznoOYr01gGi3QPNpIhI.jpg?r=d74",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUBI0njwd8nBlX4AU0TKlVq2QdxqqD1SCmYBS3QAL3wFTPQIx5v7j3tZUZNw_jcg_8pVAP71giQcR1Td9KOT7ukdEekHFxXf_O0.webp?r=624",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABabGF2vd0UtI15YCvqB-ZBqhobr-QLHyQJTofG2CnP26SCO4g5Sb8vMiLw0ZUzsJIF7ZvdXRPwicbTeNn_HMO0dOKBAvx0TSnPsEQLIoX9KXoZQajyjrEVnff4zs-lfw1NRu.jpg?r=777",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABafEkwgV-ddaqb-IzfVJPCI7Kc4kSddq7NjUsnrOePu5t6IicZvd_lkxEjYiQkQ2sIpsVBC7Gk653tPkWAy9X9ef9dg3q7LDLpg.webp?r=c30",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf4egxuyTY-pPl0nWBaDq2gz5YWSQAos-Ji6LVmLZUddIeDNCRFtnhGKadaiaKYMAQsdrKeJ_v1Dxoj0rsOcItuEOJPNe_o7LxLDvjGunDQQn3jISaSP052iVepzOLVAbFiJ.jpg?r=75e",
  },
];
const filmsSerieCercate = [
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVOHcpzaafmWUCkuvJwu8Bw1ysqucnutAp8Ov1PXP_PUV42y18hCyZt6rb2onkSzvGQToP_qSyL0N-Q9gXiMRm5pg3H6eFXAHsLvcjcqOO41S1Yx0co-JmK-UsFn1wnB6d0l.jpg?r=31e",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQivjKU0Ua2v2_7b_2OgA1CvYMPu4KQudVtzKaCWE05i27HqzjQL8exO30uH-BTx1VneuXx8FaeUm6UJ7bP6sp44fE7BoUe5Biw.webp?r=30f",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTy7s9HDqjPGcH_PZvvKJjjlCEu0e81JXDqJqGqmU431QLIaOqHr_XoBpXHoky_98qfC1WEWOjG5-PcherFNJADwVHNlvYOi_s5TTdv07dZ6bBY09sH0HaZtvm1ezCy5MLzZ.jpg?r=4f3",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbJWupPqNjSse5dHnGjz7XEVDDN-C7RswZTXMP_zX8w7rZD8esm08vRLu6CHXNRVw9mOxxJAmPgrI1mHpfEvEnwsE0TSlSuo9lg.webp?r=b9f",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcVyDQy7uc5PEHJOwcqS7r4SJDUCrrIEC6x4GA9vHlsJWNwSUOdUC4zLqxW6h-PdOvOriQtcu9gq6JqDsFABs2BjR2hbJEo7PwI.webp?r=8e5",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVe1sZ1WSCon7D6v_BQI0W7xoCzmjxsiwDjn3wrbbtCwVk4wN24740xYUJdyCCYUV_BRGAQPZOq07WI10dwI19b4d-2GT5-bLoW6vp8L1zrarcmNIWkvatoLF5KlGDXlqoiK62tE6IThirBeIsuQ1ng-oqRkkocCOSiVrwnx7j_Ls1vhi8ntiEQ_nT30K-RHKPN9JRRiR9rQEKVXpo5GCYEjZKJxwoJVLGIz8y8.webp?r=722",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWs6hlPdOHDEe-OkUyNiBW4jdq3P2dxjiAp8z_xyEK3mbPWpBH0rQ2DcawzRGviJo4ALJL58jeSOr7rzv8QfoPN52YCJbmyVnxIUbwHqeX7aoTpqBznoOYr01gGi3QPNpIhI.jpg?r=d74",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX-dt-dYTYq3rQhm6aYJbzyAdJ1deaEn7aGV1ji5nCYXrfUrOWhpDajUa76FesjYv_j0XiHyeNQ3YSWAzpBhc1moBELa3tyvqz8.webp?r=90a",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABabGF2vd0UtI15YCvqB-ZBqhobr-QLHyQJTofG2CnP26SCO4g5Sb8vMiLw0ZUzsJIF7ZvdXRPwicbTeNn_HMO0dOKBAvx0TSnPsEQLIoX9KXoZQajyjrEVnff4zs-lfw1NRu.jpg?r=777",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfaF5jNT8tb2rXRDEnjsQC_Ioo7We4HyLsWxKyYhsXehe6uHwk1OMM7Dpm6hL5py1T0K9WYONrO_cxk16rFAZBPQXBQaHY4NRoQ.webp?r=07b",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf4egxuyTY-pPl0nWBaDq2gz5YWSQAos-Ji6LVmLZUddIeDNCRFtnhGKadaiaKYMAQsdrKeJ_v1Dxoj0rsOcItuEOJPNe_o7LxLDvjGunDQQn3jISaSP052iVepzOLVAbFiJ.jpg?r=75e",
  },
];
const filmsSerieCoreane = [
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd1fcg-w44exKBx7bR6LWjKji1uzscb_FXRuEgISu_-_-mrOI-x6hNhbCVmwyl5UAEDhMm7ZP5F2u_VZEssSIdSqIXSQCxAWEbzbcUgBBiA9WhkOG3w73jhIYf2TDUi9NOaQGbtrAQB9JDboAyfKMYxVL9Mm1q0ZgdAV7x-oGGe0cjCklvouY-MOpeD2UrZmt5edUzgbwkDR78EuTMKsyGcCrOAKl8cuWHrqNl03FvxJD0ARhQ3yzP-XVsnJ46aaQNHUM4H1P6H_Hk0ma3-vdXxKP0QmPJjWN_I75C1Tx1S5D9yJ5FXBpuKmb_fw1c75z9fCLyTtT3_egJUdCgEfHCUnUjATda5hAQ.jpg?r=a91",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTJTLD01wtGn2yLMz4p7c9SLmTZE7vDPpzuANHl00LCAzR3h_Ccjn1-RaDbf4szmjdGEYR_opWUAQR8oAaPzWWbyusOyJFTAZZZXidEP6uYQzJV-eVv_HOWMnyjVHdp5hS9z.jpg?r=ed8",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYA4y5WJ5CNFGChTE7i9BalwcBrmYhsqVOdnxPvZfVuWVK0LgbcMVlFZHLvif7d2ZLC5rb8WQVrK25bx-l95W24X5rL2H1s8rs_6Kvwbj4ZT8ragVmIBMzVoTBA74W2G-a_R.jpg?r=6b5",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT4P-4UY_yPNukixeq2jHrSKVIz4XAv1IioqenNEg76ZMUXNYZ7LmVd9oDeZ8Syy8btXWIo70T1Krzn_fktGNWNTtxleMrOIoshsQAqX8BNfgRJYGEzTC0pwPSCzgtK7zW-Q.jpg?r=644",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY4w6JmlRtLUGOAv85T9RPVNPr-eUHMvpTkFhHB5dRcH1aPBCU06GQAgaANLiz8I6R00NKxcO7zI_dVT-tjV1Dji0fxdMwCDdcxMXHAOvkpRJAJEg83hJPChNc7uNULCXRaL.jpg?r=6d2",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRlvDwt6VJoC6cyeA_B3QXa8adf71SWYMnuDpRjjdr8x6QPfGTGkFfSHt43ICqDvU-TZ7ZISVAxZvaZk1DRfkTBZkK7wWZahsmYxCWDYip1V7KmBKnwlEPboIgByr4-gv6t_.jpg?r=4e6",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaxJbXN_Om7c518II6EDvwR2eIhOKl-X-kBeqN6XZJsmSbazp5s0rEs_apVr9DXnY2Bhp3BLKshhI42JsmlnkuoQUt2haIt6R-awvDm72VMAQUb6p0dePYp6G7yMWU5DKgIu.jpg?r=7b4",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaYVY755-_DdvVN7rcTWva_ZQ4f24X-RvVTX8IhdIS6z6o0pXlQS1BYvUJJq0Oy6O02bjsCAXArk5wp01o8WfXNSM8DnFl4uRwl2nw_DKe24e2TEln8c3ePlKoZx-5AjcXYA.jpg?r=002",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVFHtUYM9BeQEki6rmO96EjnVFpdEw4WLWITnEvN6zPz61DKilHWAOOJUnRqIPMk9ZlSetKrkQzmZ8FJFJG4aCdSSNxY7zasAJLTZmAaEHIftAy4PtQFEjPWbMjxV4RSxIix.jpg?r=c02",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXiJtLmRKOHaS8My1l-40091iCpYpUL_DwiMfTTNv7jzUVMgJoeAJ3_DsaPku-4Y3yPstsHw-ln-s3aARH0wJV4nrufknNG27idGYwnB3CAloCOdbCbKxcfKtL0LeeRHdjwI.jpg?r=7d7",
  },
  {
    imgSrc:
      "https://occ-0-1927-778.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc6C3H8LMsrYs3E2a1kkBnQ3qm8iJQR26gE9a2oejjIbMRczuxTrax6L7jzM-_X07oSKXSeoKuDEgztL0FpFsk8wOP9rXbrQVBr8ipXRgSwT0p8MslnP1IRgwMKmSIjSXoAu.jpg?r=f5d",
  },
];

const wrapperPremiate = document.querySelector(".swiper-wrapper-premiate");
const wrapperCercate = document.querySelector(".swiper-wrapper-cercati");
const wrapperCoreane = document.querySelector(".swiper-wrapper-coreane");

function createAppendCard(serie, container) {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");

  const imgFilm = document.createElement("img");
  imgFilm.src = serie.imgSrc;

  swiperSlide.appendChild(imgFilm);
  container.appendChild(swiperSlide);
}

filmsSeriePremiate.forEach((serie) => {
  createAppendCard(serie, wrapperPremiate);
});
filmsSerieCercate.forEach((serie) => {
  createAppendCard(serie, wrapperCercate);
});
filmsSerieCoreane.forEach((serie) => {
  createAppendCard(serie, wrapperCoreane);
});

/*const swiper = new Swiper('.swiper', {
  // Optional parameters
 
  loop: true,
  slidesPerView:6,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});*/

function swiperGeneral(containerSwiper, arrowRight, arrowLeft) {
  return new Swiper(containerSwiper, {
    navigation: {
      nextEl: arrowLeft,
      prevEl: arrowRight,
    },
    slidesPerView: 6,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768:{
        slidesPerView:4,
      },
      1200:{
        slidesPerView:6,
      },
    },
  });
}

const swiperPremiate = swiperGeneral(
  ".swiper-premiate",
  ".arrow-r-premiate",
  ".arrow-l-premiate"
);
const swiperCercate = swiperGeneral(
  ".swiper-cercati",
  ".arrow-r-cercati",
  ".arrow-l-cercati"
);
const swiperCoreane = swiperGeneral(
  ".swiper-coreane",
  ".arrow-r-coreane",
  ".arrow-l-coreane"
);

const wrapperNumber = document.querySelector(".swiper-wrapper-coreane");
const swiperSlideNumber = document.querySelectorAll(".swiper-slide-number");
const swiperNumber = swiperGeneral(
  ".swiper-number",
  ".arrow-r-number",
  ".arrow-l-number"
);
