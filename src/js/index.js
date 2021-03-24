import "../sass/style.scss";
import { openMenu } from "./menu";
openMenu();

import { addSwiper } from "./swiper";
import { resizeBrands } from "./morebutton";
import { resizeTechnics } from "./morebutton";
import { openCallModal } from "./modal-call";
import { openFeedbackModal } from "./modal-feedback";
resizeBrands();
resizeTechnics();
addSwiper();
openCallModal();
openFeedbackModal();
