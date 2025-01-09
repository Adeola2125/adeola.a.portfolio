template
<script setup lang="ts">
/*Call Components*/
// import SalesOverview from '@/components/charts/SalesOverview.vue';
// import YearlyBreakup from '@/components/charts/YearlyBreakup.vue';
// import MonthlyEarning from '@/components/charts/MonthlyEarnings.vue';
// import RecentTransaction from '@/components/dashboard/RecentTransaction.vue';
import FundDialog from './components/fund_dialog.vue';
import AllCatsDialog from './components/all_cats_dialog.vue';
import users from '@/plugins/msw/auth-users/users_list.json';
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const shuffledMembers = ref<User[]>([]);
const countdown = ref('');

const authenticatedUser = ref(JSON.parse(localStorage.getItem('authenticatedUser') || '{}'));

// Define the type for your user objects
interface User {
  code_id: string;
  lastUpdated: string; // Assuming you have this field for the "recently saved" logic
  // Add other fields as necessary
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to calculate remaining amount and percentage to reach the target
function calculateRemaining(target, amount) {
  const remainingAmount = target - amount;
  const percentageRemaining = (remainingAmount / target) * 100;
  return {
    remainingAmount: remainingAmount > 0 ? remainingAmount : 0,
    percentageRemaining: remainingAmount > 0 ? percentageRemaining : 0
  };
}

// Computed property for the authenticated user's remaining amount and percentage
const userRemaining = computed(() => {
  if (authenticatedUser.value.target && authenticatedUser.value.amount) {
    return calculateRemaining(authenticatedUser.value.target, authenticatedUser.value.amount);
  }
  return { remainingAmount: 0, percentageRemaining: 0 };
});

// Function to calculate the countdown
function calculateCountdown() {
  const endDate = new Date(authenticatedUser.value.end_date).getTime();
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    countdown.value = '00:00:00:00';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Computed property to handle NaN
const displayCountdown = computed(() => {
  return isNaN(Date.parse(authenticatedUser.value.end_date)) || countdown.value.includes('NaN')
    ? '00:00:00:00'
    : countdown.value;
});

// Set up the countdown timer
let timer;
onMounted(() => {
  // console.log('route.query.to:', route.query.to);

  calculateCountdown();
  timer = setInterval(calculateCountdown, 1000);

  // Shuffle the array on component mount
  shuffledMembers.value = shuffleArray([...users.members_that_just_saved]);

  handleCheck();
});

// Clean up the timer when the component is unmounted
onUnmounted(() => {
  clearInterval(timer);
});

const handleCheck = () => {
  setTimeout(() => {
    if (!authenticatedUser.value.amount) {
      router.replace('/auth/login');
    }
  }, 1000);
};
</script>

<template>
  <div class="mt-4 mt-md-0">
    <!-- <small class="justify-content-left align-items-left d-flex-none">₦</small> -->
    <VRow>
      <VCol cols="12" :md="authenticatedUser.target <= 0 ? '12' : '4'">
        <div class="d-flex flex-column" style="gap: 13px">
          <div class="notification py-3">
            <div class="notiglow"></div>
            <div class="notiborderglow"></div>
            <div class="notititle fs_25 d-flex justify-content-between align-items-center">
              ₦{{ authenticatedUser !== null ? Number(authenticatedUser.amount).toLocaleString() + '.00' : '0.00' }}
              <span
                v-if="authenticatedUser.target <= 0 && displayCountdown !== '00:00:00:00'"
                class="fs_12 text-dark"
                style="padding: 7px 12px"
              >
                Time left:
                <span :class="displayCountdown === '00:00:00:00' ? 'text-primary' : 'text-danger'">{{
                  displayCountdown
                }}</span></span
              >
              <a
                v-if="authenticatedUser.target > 0 && displayCountdown === '00:00:00:00'"
                href="https://wa.me/8121253150?text=Hello Admin, I reached my milestone 🎉 and i am set for withdrawal.%A0%A0Account Number:_____%A0%A0Bank:_____%A0%A0Account Name:_____"
                class="text-primary text-decoration-none fs_16"
                target="_blank"
                rel="noopener noreferrer"
                style="padding: 7px 20px"
              >
                <i class="bi bi-box ml-2" style="vertical-align: middle; font-size: 18px; margin-right: 5px"></i
                >Withdraw
              </a>
            </div>
            <div class="notibody py-0" style="color: #000; font-size: 1.5em; line-height: 1.4">
              {{ authenticatedUser !== null ? authenticatedUser.name : '' }}
            </div>
            <div class="notibody">
              <div class="d-flex justify-content-between align-items-center">
                <span class="fs_12" style="font-size: 12px"
                  >Kolo ID:
                  <span style="font-size: 16px; color: #048c7f">{{
                    authenticatedUser !== null ? authenticatedUser.code : '****'
                  }}</span></span
                >
                <button
                  type="button"
                  style="
                    font-size: 13px;
                    border: none;
                    color: #048c7f;
                    padding: 7px 12px;
                    border-radius: 5px;
                    font-weight: 600;
                  "
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >
                  <span v-if="authenticatedUser.target <= 0"
                    ><i class="bi bi-plus" style="vertical-align: middle; font-size: 18px"></i>Fund Kolo</span
                  >
                  <i v-else class="bi bi-box" style="vertical-align: middle; font-size: 18px"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </VCol>
      <VCol v-if="authenticatedUser.target > 0" cols="12" md="8">
        <div class="d-flex flex-column" style="gap: 13px">
          <div class="notification py-3">
            <div class="notiglow"></div>
            <div class="notiborderglow"></div>
            <div class="notititle fs_25 d-flex justify-content-between align-items-center">
              ₦{{ authenticatedUser !== null ? Number(authenticatedUser.target).toLocaleString() + '.00' : '0.00' }}
              <span
                v-if="displayCountdown !== '00:00:00:00' || Number(userRemaining.percentageRemaining.toFixed(2)) > 0"
                class="fs_12 text-dark"
                style="padding: 7px 12px"
                >Time left:
                <span :class="displayCountdown === '00:00:00:00' ? 'text-primary' : 'text-danger'">{{
                  displayCountdown
                }}</span></span
              >
              <span
                v-if="displayCountdown === '00:00:00:00' || Number(userRemaining.percentageRemaining.toFixed(2)) <= 0"
              >
                <a
                  href="https://wa.me/8121253150?text=Hello Admin, I reached my milestone 🎉 and i am set for withdrawal.%A0%A0Account Number:_____%A0%A0Bank:_____%A0%A0Account Name:_____"
                  class="text-primary text-decoration-none fs_14"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="padding: 7px 20px"
                >
                  <i class="bi bi-box ml-2" style="vertical-align: middle; font-size: 16px; margin-right: 5px"></i
                  >Withdraw
                </a>
              </span>
            </div>
            <div class="notibody py-0" style="color: #000; font-size: 1.5em; line-height: 1.4">My Kolo Target</div>
            <div class="notibody">
              <div class="d-flex justify-content-between align-items-center">
                <span v-if="Number(userRemaining.percentageRemaining.toFixed(2)) > 0" class="fs_15"
                  >You are
                  <span style="font-size: 16px; color: #048c7f"
                    >{{ userRemaining.percentageRemaining.toFixed(2) }}%</span
                  >
                  <span v-if="userRemaining.percentageRemaining > 15"> <span class="text-danger"> far</span> from</span>
                  <span v-else> close to</span>
                  your target! You have
                  <span style="font-size: 16px; color: #048c7f">
                    ₦{{ userRemaining.remainingAmount.toLocaleString() }}
                  </span>
                  remaining to reach this milestone.
                </span>
                <span v-else>Congratulations! You reached your target 🎉🎉🤝</span>
                <button
                  type="submit"
                  style="
                    font-size: 13px;
                    border: none;
                    color: #048c7f;
                    padding: 7px 12px;
                    border-radius: 5px;
                    font-weight: 600;
                  "
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >
                  <i class="bi bi-plus" style="vertical-align: middle; font-size: 18px"></i>Fund Kolo
                </button>
              </div>
            </div>
          </div>
        </div>
      </VCol>
      <VCol cols="12">
        <VRow>
          <VCol cols="12" sm="6" md="4" v-for="top_cat in users.top_categories" :key="top_cat.cat_name">
            <div class="notification">
              <div class="notiglow"></div>
              <div class="notiborderglow"></div>
              <div class="notititle">{{ top_cat.cat_name }}</div>
              <div class="notibody">
                {{ top_cat.total_members }} Members
                <div class="mt-2">
                  <a
                    :href="`https://wa.me/8121253150?text=Hello Admin, i will be joining category ${top_cat.cat_name} for this challenge.`"
                    class="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="
                      background: #048c7f;
                      font-size: 13px;
                      border: none;
                      color: white;
                      padding: 7px 12px;
                      border-radius: 5px;
                    "
                  >
                    Join Category
                  </a>
                </div>
              </div>
            </div>
          </VCol>

          <VCol cols="12" class="py-0">
            <div class="px-3">
              <a
                href="https://wa.me/8121253150?text=Hello Admin, i want to set a custom category to be _____"
                class="text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
                style="
                  font-size: 13px;
                  border: none;
                  color: #048c7f;
                  padding: 7px 5px;
                  border-radius: 5px;
                  font-weight: 600;
                  float: right;
                "
              >
                Custom Category
              </a>
              <!-- <button
                type="submit"
                style="
                  font-size: 13px;
                  border: none;
                  color: #048c7f;
                  padding: 7px 5px;
                  border-radius: 5px;
                  font-weight: 600;
                  float: right;
                "
                data-toggle="modal"
                data-target="#staticBackdrop02"
                class="view_all_cat"
              >
                Custom Category
              </button> -->
            </div>
          </VCol>

          <VCol cols="12" class="pt-4">
            <div class="px-">
              <h3>Top Savers</h3>
            </div>
          </VCol>

          <VCol cols="12" md="8">
            <div
              class="d-flex flex-column"
              style="gap: 10px; background-color: RGBA(222, 227, 255, 0.5); border-radius: 10px"
            >
              <div v-for="otm in users.overall_top_members" :key="otm.code_id">
                <div class="notification" style="min-height: 6.5em; background: transparent">
                  <div class="notiglow"></div>
                  <div class="notiborderglow"></div>
                  <div class="notititle">Kolo {{ otm.code_id }}</div>
                  <div class="notibody">Leading with over ₦{{ otm.leading_amt.toLocaleString() }}</div>
                  <div class="notibody text-dark fs_17">
                    <span class="fs_15 text-muted">from category:</span>
                    {{ otm.category }}
                  </div>
                </div>
                <div class="px-4 pt-2">
                  <div class="" style="border-bottom: 1px solid #dee3ff; position: relative; z-index: 99"></div>
                </div>
              </div>
            </div>
          </VCol>

          <VCol cols="12" md="4">
            <div class="d-flex flex-column" style="gap: 13px">
              <div class="notification py-3">
                <div class="notiglow"></div>
                <div class="notiborderglow"></div>
                <div class="notititle fs_17 mt-1">Note From Us</div>
                <div class="notibody">Stay Consistent and Avoid Temptation:</div>
                <div class="notibody">
                  <span class="fs_12" style="font-size: 12px"
                    >Your target remains your priority, be consistent, no matter how small the amount. The key is to
                    make saving a priority. <br />
                    Once you save, treat the money as untouchable until the challenge ends. Avoid withdrawing unless
                    it’s for the specific purpose you planned. We look forward to celebrating your financial milestone.
                    🎉</span
                  >
                </div>
              </div>

              <div class="notification d-flex" style="overflow: hidden">
                <div class="notibody py-2" style="color: #000; font-size: 1em; line-height: 2.8">
                  Other Kolonaires who recently saved
                </div>

                <marquee
                  width="88%"
                  height="30px"
                  direction="up"
                  scrollamount="1"
                  behavior="scroll"
                  style="
                    z-index: 99;
                    /* position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%); */
                    max-width: 100%;
                    padding-left: 22px;
                  "
                  class=""
                >
                  <span
                    class="d-block saved_marq_items"
                    v-for="scroll_item in shuffledMembers"
                    :key="scroll_item.code_id"
                    >Kolo <span class="" style="font-weight: 600">{{ scroll_item.code_id }}</span> recently saved.</span
                  >
                </marquee>
              </div>
            </div>
          </VCol>

          <VCol cols="12" md="4" class="pt-4">
            <div class="px-">
              <div class="share_card">
                <div class="header py-5">
                  <span class="icon">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        clip-rule="evenodd"
                        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="alert mb-0 pb-0 text-dark">Refer a Friend</h4>
                  <p class="alert mb-0 fs_13 pb-0">Your favorite humans and small businesses</p>
                  <div class="actions">
                    <a
                      :href="`https://wa.me/?text=Kolo%20is%20a%20local%20term%20for%20a%20savings%20bank%20that%20many%20of%20us%20use%20to%20set%20aside%20money%20for%20the%20future%20.%20Traditionally,%20we%20keep%20it%20at%20home,%20but%20we%20all%20know%20the%20temptation%20to%20break%20it%20open%20whenever%20we%20need%20quick%20cash.%20That's%20why%20we%20have%20a%20group%20created%20for%20digital%20kolo-a%20way%20to%20save%20without%20the%20temptation%20of%20dipping%20into%20it%20anytime%20you%20want.%0A%0Ahttps%3A%2F%2Fchat.whatsapp.com%2FJwARMvHxUTZ4C1bcoX1rbB%0AJoin%20the%20kolo%20community%20today!%A0%A0Share%20my%20referral%20ode%20(${authenticatedUser !== null ? authenticatedUser.code : 'KC___'})%20with%20the%20admin%20when%20you%20join%20the%20group%20to%20help%20me%20claim%20my%20bonus.`"
                      class="read"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Refer a Friend
                    </a>
                  </div>
                </div>

                <div class="p-4 share_card_body">
                  <ul>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Refer friends, family members or colleagues </span>
                    </li>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Get a N1,000 cash bonus for every new referral of 5 that joins Owo Kolo Challenge </span>
                    </li>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Your referrals also get 2% of their first deposit </span>
                    </li>
                  </ul>

                  <!-- <div class="actions">
                    <a class="read" href=""> Take a Look </a>

                    <a class="mark-as-read" href=""> Mark as Read </a>
                  </div> -->
                </div>
              </div>
            </div>
          </VCol>

          <VCol cols="12" md="4" class="pt-4">
            <div class="px-">
              <div class="share_card">
                <div class="header py-5">
                  <span class="icon">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        clip-rule="evenodd"
                        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="alert mb-0 pb-0 text-dark">Refer a Business</h4>
                  <p class="alert mb-0 fs_13 pb-0">Your favorite humans and small businesses</p>
                  <div class="actions">
                    <a
                      :href="`https://wa.me/?text=Kolo%20is%20a%20local%20term%20for%20a%20savings%20bank%20that%20many%20of%20us%20use%20to%20set%20aside%20money%20for%20the%20future%20.%20Traditionally,%20we%20keep%20it%20at%20home,%20but%20we%20all%20know%20the%20temptation%20to%20break%20it%20open%20whenever%20we%20need%20quick%20cash.%20That's%20why%20we%20have%20a%20group%20created%20for%20digital%20kolo-a%20way%20to%20save%20without%20the%20temptation%20of%20dipping%20into%20it%20anytime%20you%20want.%0A%0Ahttps%3A%2F%2Fchat.whatsapp.com%2FJwARMvHxUTZ4C1bcoX1rbB%0AJoin%20the%20kolo%20community%20today!%A0%A0Share%20my%20referral%20ode%20(${authenticatedUser !== null ? authenticatedUser.code : 'KC___'})%20with%20the%20admin%20when%20you%20join%20the%20group%20to%20help%20me%20claim%20my%20bonus.`"
                      class="read"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Refer a Business
                    </a>
                  </div>
                </div>

                <div class="p-4 share_card_body">
                  <ul>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Refer friends, family members or colleagues </span>
                    </li>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Get a N1,000 cash bonus for every new referral of 5 that joins Owo Kolo Challenge </span>
                    </li>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Your referrals also get 2% of their first deposit </span>
                    </li>
                  </ul>

                  <!-- <div class="actions">
          <a class="read" href=""> Take a Look </a>

          <a class="mark-as-read" href=""> Mark as Read </a>
        </div> -->
                </div>
              </div>
            </div>
          </VCol>

          <VCol cols="12" md="4" class="pt-4">
            <div class="px-">
              <div class="share_card">
                <div class="header py-5">
                  <span class="icon">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        clip-rule="evenodd"
                        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="alert mb-0 pb-0 text-dark">Refer a Group</h4>
                  <p class="alert mb-0 fs_13 pb-0">Your favorite humans and small businesses</p>
                  <div class="actions">
                    <!-- <a class="read" href=""> Refer a Group </a> -->
                    <a
                      :href="`https://wa.me/?text=Kolo%20is%20a%20local%20term%20for%20a%20savings%20bank%20that%20many%20of%20us%20use%20to%20set%20aside%20money%20for%20the%20future%20.%20Traditionally,%20we%20keep%20it%20at%20home,%20but%20we%20all%20know%20the%20temptation%20to%20break%20it%20open%20whenever%20we%20need%20quick%20cash.%20That's%20why%20we%20have%20a%20group%20created%20for%20digital%20kolo-a%20way%20to%20save%20without%20the%20temptation%20of%20dipping%20into%20it%20anytime%20you%20want.%0A%0Ahttps%3A%2F%2Fchat.whatsapp.com%2FJwARMvHxUTZ4C1bcoX1rbB%0AJoin%20the%20kolo%20community%20today!%A0%A0Share%20my%20referral%20ode%20(${authenticatedUser !== null ? authenticatedUser.code : 'KC___'})%20with%20the%20admin%20when%20you%20join%20the%20group%20to%20help%20me%20claim%20my%20bonus.`"
                      class="read"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Refer a Group
                    </a>
                  </div>
                </div>

                <div class="p-4 share_card_body">
                  <ul>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Refer friends, family members or colleagues </span>
                    </li>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Get a N1,000 cash bonus for every new referral of 5 that joins Owo Kolo Challenge </span>
                    </li>
                    <li class="message">
                      <i class="bi bi-check text-success"></i>
                      <span> Your referrals also get 2% of their first deposit </span>
                    </li>
                  </ul>

                  <!-- <div class="actions">
          <a class="read" href=""> Take a Look </a>

          <a class="mark-as-read" href=""> Mark as Read </a>
        </div> -->
                </div>
              </div>
            </div>
          </VCol>
        </VRow>
      </VCol>
    </VRow>

    <div
      class="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="width: fit-content !important">
          <FundDialog />
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="staticBackdrop02"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="width: fit-content !important">
          Holla
          <AllCatsDialog />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notification {
  display: flex;
  flex-direction: column;
  isolation: isolate;
  position: relative;
  width: 100%;
  min-height: 8rem;
  background: RGBA(222, 227, 255, 0.5);
  border-radius: 1rem;
  overflow: hidden;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
  --gradient: linear-gradient(to bottom, #81cdc6, #048c7f, #036c5f);
  /* --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff); */
  --color: #32a6ff;
  /* --color: #32a6ff; */
}

.notification:before {
  position: absolute;
  content: '';
  inset: 0.0625rem;
  border-radius: 0.9375rem;
  /* background: RGBA(222, 227, 255, 0.5); */
  z-index: 2;
}

.notification:after {
  position: absolute;
  content: '';
  width: 0.25rem;
  inset: 0.65rem auto 0.65rem 0.5rem;
  border-radius: 0.125rem;
  background: var(--gradient);
  transition: transform 300ms ease;
  z-index: 4;
}

.notification:hover:after {
  transform: translateX(0.15rem);
}

.notititle {
  /* color: var(--color); */
  color: #048c7f;
  padding: 0.45rem 0.25rem 0.2rem 1.25rem;
  font-weight: 500;
  font-size: 1.3rem;
  transition: transform 300ms ease;
  z-index: 5;
}

.notification:hover .notititle {
  transform: translateX(0.15rem);
}

.notibody {
  color: #99999d;
  padding: 0 1.25rem;
  transition: transform 300ms ease;
  z-index: 5;
}

.notification:hover .notibody {
  transform: translateX(0.25rem);
}

.notiglow,
.notiborderglow {
  position: absolute;
  width: 20rem;
  height: 20rem;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle closest-side at center, white, transparent);
  opacity: 0;
  transition: opacity 300ms ease;
}

.notiglow {
  z-index: 3;
}

.notiborderglow {
  z-index: 1;
}

.notification:hover .notiglow {
  opacity: 0.1;
}

.notification:hover .notiborderglow {
  opacity: 0.1;
}

.note {
  color: var(--color);
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 0.9rem;
  width: 75%;
}
.view_all_cat {
  display: block;
  color: #048c7f;
  transition: 0.2s ease-out;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
}
.view_all_cat:hover {
  color: #048c7f;
  transition: 0.2s ease-out;
}
.saved_marq_items {
  font-size: 16px;
  white-space: nowrap;
  display: block;
  color: #048c7f;
}
.marquee .indicator {
  position: absolute;
  /* top: 0; */
  width: 100%;
  height: 10px;
  background-color: blue;
  z-index: 999;
}

/* Share share_card style */
.share_card {
  min-width: 320px;
  border-width: 1px;
  border-color: rgba(219, 234, 254, 1);
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  /* padding: 1rem; */
}

.header {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #dee3ff;
  background: RGBA(222, 227, 255, 0.5);
  /* grid-gap: 1rem;
  gap: 1rem; */
}

.icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #048c7f;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 1);
}

.icon svg {
  height: 1.9rem;
  width: 1.9rem;
}

.alert {
  font-weight: 500;
  color: rgba(107, 114, 128, 1);
}

.message {
  margin-bottom: 1rem;
  color: rgba(107, 114, 128, 1);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.actions {
  margin-top: 1.5rem;
}

.actions a {
  text-decoration: none;
}

.mark-as-read,
.read {
  display: inline-block;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
}

.read {
  background-color: #048c7f;
  color: rgba(255, 255, 255, 1);
}

.mark-as-read {
  margin-top: 0.5rem;
  background-color: rgba(249, 250, 251, 1);
  color: rgba(107, 114, 128, 1);
  transition: all 0.15s ease;
}

.mark-as-read:hover {
  background-color: rgb(230, 231, 233);
}

.share_card_body ul {
  list-style: none;
}
.share_card_body ul li {
  line-height: 1.5;
  font-size: 14px;
}

.share_card_body ul li i {
  vertical-align: middle;
  font-size: 24px;
  line-height: 1;
  transform: translate(-5px, 0);
}
</style>
