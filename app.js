import { sneakers } from "./data.js";

const wrapper = document.getElementById("wrapper");
const korzina = document.getElementById("korzina");
const modal = document.getElementById("modal");
const blur = document.getElementById("blur");
const korzinaWrapper = document.getElementById("korzinaWrapper");

let sneakerKorzina = [];

korzina.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.style.top = window;
  blur.classList.remove("hidden");
  document.body.style.overflowY = "hidden";
  renderToModal();
});

blur.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});

function renderSneakers() {
  let res = "";
  sneakers.map((el, index) => {
    res += `
    <div class="card hover:shadow-lg min-w-[210px] min-h-[260px] border border-[#F3F3F3] py-[20px] px-[30px] rounded-[48px]">
                        <div class="card-body"><img class="w-[178px] h-[112px] object-cover" src="${
                          el.image
                        }" alt="img"></div>
                        <div class="card-footer mt-[14px]">
                            <h1 class="text-[14px] font-normal mb-[14px]">${
                              el.name
                            }</h1>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-[11px] font-medium text-[#BDBDBD] uppercase">Цена:</span>
                                    <p class="text-[14px] font-bold ">${
                                      el.price
                                    }</p>
                                </div>
                                ${
                                  el.isLiked === true
                                    ? ` <img data-id=${
                                        el.id - 1
                                      } id="btn2" src="./src/assets/images/check.svg" alt="check">`
                                    : `<button data-id=${index} 
                                  id="btn" class="cursor-pointer w-[32px] h-[32px] border border-[#F3F3F3] text-black rounded-lg">+</button>`
                                }
                            </div>
                        </div>
                    </div>
    `;
  });

  wrapper.innerHTML = res;
}

function renderToModal() {
  let res = "";
  sneakerKorzina?.map((el, index) => {
    res += `
  <div id="card" class="card flex justify-between items-center mb-5 pt-[30px] px-[20px] pb-[30px] border border-[#F3F3F3] rounded-[20px]">
            <div class="card-body mr-[20px]">
                <img class="w-[70px] h-[70px] object-contain"  src="${el.image}" alt="img">
            </div>
            <div class="card-footer flex justify-between items-center">
                <div>
                    <h1 class="text-[14px] w-[83%] font-normal">${el.name}</h1>
                    <p class="text-[14px] font-bold">${el.price}</p>
                </div>
                 <button data-id=${index} 
                   id="xBtn" 
                   class="p-2 hover:bg-red-600 hover:text-white border border-[#F3F3F3] text-black rounded-lg">delete</button>
            </div>
        </div>
  `;
  });
  korzinaWrapper.innerHTML = res;
}

renderToModal();

korzinaWrapper.addEventListener("click", (e) => {
  if (e.target.id.includes("xBtn")) {
    let ids = +e.target.getAttribute("data-id");
    let res = sneakerKorzina.filter((v, ind) => ind !== ids);
    sneakerKorzina = res;
    sneakers[ids].isLiked = false;
    renderSneakers();
    renderToModal();
  }
});

wrapper.addEventListener("click", (e) => {
  if (e.target.id.includes("btn")) {
    let id = +e.target.getAttribute("data-id");
    sneakers[id].isLiked = true;
    if (sneakers[id].isLiked = true) {
      sneakerKorzina.push(sneakers[id]);
    }
    renderToModal();
    renderSneakers();
    console.log(sneakers);
    // e.target.innerHTML = "<i class='bx bx-check text-white'></i>";
    // e.target.classList.add(
    //   "bg-gradient-to-b",
    //   "from-green-500",
    //   "via-lime-500",
    //   "via-green-500"
    // );
  }
});

renderSneakers();
