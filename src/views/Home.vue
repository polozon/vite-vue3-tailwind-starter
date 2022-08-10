<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
import AccountMenu from "@/components/AccountMenu.vue";
import UserButton from "@/components/UserButton.vue";
import BarChart from "@/components/BarChart.vue";
</script>

<template>
  
  <div class="flex h-screen bg-gray-100 font-sans">
    <!-- Side bar-->
    <div
      id="sidebar"
      class="
        h-screen
        w-16
        menu
        bg-white
        text-white
        px-4
        flex
        items-center
        nunito
        static
        fixed
        shadow
      "
    >
      <ul class="list-reset">
        <li class="my-2 md:my-0">
          <a
            href="#"
            class="
              block
              py-1
              md:py-3
              pl-1
              align-middle
              text-gray-600
              no-underline
              hover:text-indigo-400
            "
          >

            <!--<i class="fas fa-home fa-fw mr-3"></i>-->
            <!-- <font-awesome-icon icon="fa-solid fa-home" class="fas fa-fw mr-3"/> -->
            <font-awesome-icon icon="fa-solid fa-home" class="fa-fw mr-3"/>
            <span class="w-full inline-block pb-1 md:pb-0 text-sm">Home</span>
          </a>
        </li>
        <li class="my-2 md:my-0">
          <a
            href="https://tailwindtoolbox.github.io/Minimal-Admin-Template/"
            class="
              block
              py-1
              md:py-3
              pl-1
              align-middle
              text-gray-600
              no-underline
              hover:text-indigo-400
            "
          >
            <font-awesome-icon icon="fa-solid fa-baby" class="fa-fw mr-3"/>
            <!-- <i class="fas fa-tasks fa-fw mr-3"></i> -->
            <span class="w-full inline-block pb-1 md:pb-0 text-sm">Original</span>
          </a>
        </li>
        
        <li class="my-2 md:my-0">
          <a
            href="/about"
            class="
              block
              py-1
              md:py-3
              pl-1
              align-middle
              text-gray-600
              no-underline
              hover:text-indigo-400
            "
          >
            <font-awesome-icon icon="fa-solid fa-circle-question" class="fa-fw mr-3"/>
            <span class="w-full inline-block pb-1 md:pb-0 text-sm"
              >About</span
            >
          </a>
        </li>
      </ul>
    </div>

    <!-- ================= SLUT PÅ SIDEBAR =============== -->


    <div class="flex flex-row flex-wrap flex-1 flex-grow content-start pl-16">
      <div class="h-40 lg:h-20 w-full flex flex-wrap">
        <nav
          id="header"
          class="
            bg-gray-200
            w-full
            lg:max-w-sm
            flex
            items-center
            border-b-1 border-gray-300
            order-2
            lg:order-1
          "
        >
          <div class="px-2 w-full">
            <select
              name=""
              class="
                bg-gray-300
                border-2 border-gray-200
                rounded-full
                w-full
                py-3
                px-4
                text-gray-500
                font-bold
                leading-tight
                focus:outline-none focus:bg-white focus:shadow-md
              "
              id="form-field2"
            >
              <option value="Default">default</option>
              <option value="A">report a</option>
              <option value="B">report b</option>
              <option value="C">report c</option>
            </select>
          </div>
        </nav>
        <nav
          id="header1"
          class="
            bg-gray-100
            w-auto
            flex-1
            border-b-1 border-gray-300
            order-1
            lg:order-2
          "
        >
          <div class="flex h-full justify-between items-center">
            <!--Search-->
            <div class="relative w-full max-w-3xl px-6">
              <div
                class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10"
              >
                <svg
                  class="h-4 w-4 fill-current text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                  ></path>
                </svg>
              </div>

              <input
                id="search-toggle"
                type="search"
                placeholder="search"
                class="
                  block
                  w-full
                  bg-gray-200
                  focus:outline-none focus:bg-white focus:shadow-md
                  text-gray-700
                  font-bold
                  rounded-full
                  pl-12
                  pr-4
                  py-3
                "
                onkeyup="updateSearchResults(this.value);"
              />
            </div>
            <!-- / Search-->

            <!--Menu-->

            <div class="flex relative inline-block pr-6">
              <UserButton @logout="userLogout" />
            </div>

            <!-- / Menu -->
          </div>
        </nav>
      </div>

      <!--Dash Content -->
      <div
        id="dash-content"
        class="
          bg-gray-200
          py-6
          lg:py-0
          w-full
          lg:max-w-sm
          flex flex-wrap
          content-start
        "
      >

        <!-- ============ START OF CARDS ======================= -->

        <div class="w-1/2 lg:w-full">
          <div
            class="
              border-2 border-gray-400 border-dashed
              hover:border-transparent hover:bg-white hover:shadow-xl
              rounded
              p-6
              m-2
              md:mx-10 md:my-6
            "
          >
            <div class="flex flex-col items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-3 bg-gray-300">
                  <font-awesome-icon icon="fa-solid fa-wallet" class="fa-fw fa-inverse text-indigo-500"/>
                  <!-- <i class="fa fa-wallet fa-fw fa-inverse text-indigo-500"></i> -->
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-3xl">
                  $3249
                  <span class="text-green-500"
                    ><i class="fas fa-caret-up"></i
                  ></span>
                </h3>
                <h5 class="font-bold text-gray-500">Total Revenue</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2 lg:w-full">
          <div
            class="
              border-2 border-gray-400 border-dashed
              hover:border-transparent hover:bg-white hover:shadow-xl
              rounded
              p-6
              m-2
              md:mx-10 md:my-6
            "
          >
            <div class="flex flex-col items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-3 bg-gray-300">
                  <font-awesome-icon icon="fa-solid fa-user-group" class="fa-fw fa-inverse text-indigo-500"/>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-3xl">
                  249
                  <span class="text-orange-500"
                    ><i class="fas fa-exchange-alt"></i
                  ></span>
                </h3>
                <h5 class="font-bold text-gray-500">Total Users</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2 lg:w-full">
          <div
            class="
              border-2 border-gray-400 border-dashed
              hover:border-transparent hover:bg-white hover:shadow-xl
              rounded
              p-6
              m-2
              md:mx-10 md:my-6
            "
          >
            <div class="flex flex-col items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-3 bg-gray-300">
                  <font-awesome-icon icon="fa-solid fa-user-plus" class="fa-fw fa-inverse text-indigo-500"/>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-3xl">
                  2
                  <span class="text-yellow-600"
                    ><i class="fas fa-caret-up"></i
                  ></span>
                </h3>
                <h5 class="font-bold text-gray-500">New Users</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2 lg:w-full">
          <div
            class="
              border-2 border-gray-400 border-dashed
              hover:border-transparent hover:bg-white hover:shadow-xl
              rounded
              p-6
              m-2
              md:mx-10 md:my-6
            "
          >
            <div class="flex flex-col items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-3 bg-gray-300">
                  <font-awesome-icon icon="fa-solid fa-server" class="fa-fw fa-inverse text-indigo-500"/>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-3xl">152 days</h3>
                <h5 class="font-bold text-gray-500">Server Uptime</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Graph Content -->
      <div id="main-content" class="w-full flex-1">
        <div class="flex flex-1 flex-wrap">
          <div class="w-full xl:w-2/3 p-6 xl:max-w-6xl">
            <!--"Container" for the graphs"-->
            <div class="max-w-full lg:max-w-3xl xl:max-w-5xl">
              <!--Graph Card-->
              <div class="border-b p-3">
                <h5 class="font-bold text-black">Graph</h5>
              </div>
              <div class="p-5">
                
                <!--   BARCHART -->
                <BarChart height="200" :chart-data="myChartData" />

                <!-- <div class="ct-chart ct-golden-section" id="chart1"></div> -->
              </div>
              <!--/Graph Card-->

              <!-- <BarChart class="max-h-40"/> -->

              <!--Table Card-->
              <div class="p-3">
                <div class="border-b p-3">
                  <h5 class="font-bold text-black">Table</h5>
                </div>
                <div class="p-5">
                  <table class="w-full p-5 text-gray-700">
                    <thead>
                      <tr>
                        <th class="text-left text-blue-900">Name</th>
                        <th class="text-left text-blue-900">Side</th>
                        <th class="text-left text-blue-900">Role</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Obi Wan Kenobi</td>
                        <td>Light</td>
                        <td>Jedi</td>
                      </tr>
                      <tr>
                        <td>Greedo</td>
                        <td>South</td>
                        <td>Scumbag</td>
                      </tr>
                      <tr>
                        <td>Darth Vader</td>
                        <td>Dark</td>
                        <td>Sith</td>
                      </tr>
                    </tbody>
                  </table>

                  <p class="py-2"><a href="#">See More issues...</a></p>
                </div>
              </div>
              <!--/table Card-->
            </div>
          </div>

          <div
            class="w-full xl:w-1/3 p-6 xl:max-w-4xl border-l-1 border-gray-300"
          >
            <!--"Container" for the graphs"-->
            <div class="max-w-sm lg:max-w-3xl xl:max-w-5xl">
              <!--Graph Card-->

              <div class="border-b p-3">
                <h5 class="font-bold text-black">Graph</h5>
              </div>
              <div class="p-5">
                <div class="ct-chart ct-golden-section" id="chart2"></div>
              </div>

              <!--/Graph Card-->

              <!--Graph Card-->
              <div class="border-b p-3">
                <h5 class="font-bold text-black">Graph</h5>
              </div>
              <div class="p-5">
                <div class="ct-chart ct-golden-section" id="chart3"></div>
              </div>

              <!--/Graph Card-->

              <!--Graph Card-->

              <div class="border-b p-3">
                <h5 class="font-bold text-black">Graph</h5>
              </div>
              <div class="p-5">
                <div class="ct-chart ct-golden-section" id="chart4"></div>
              </div>

              <!--/Graph Card-->

              <!--Template Card-->
              <div class="p-3">
                <div class="border-b p-3">
                  <h5 class="font-bold text-black">Template</h5>
                </div>
                <div class="p-5"></div>
              </div>
              <!--/Template Card-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      myChartData: {
          labels: [ 'Vatten', 'Öl', 'Vin', 'Kaffe' ],
          datasets: [{ 
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(0, 0, 255, 0.5)',
                'rgba(155, 155, 0, 0.5)'
            ],
            data: [40, 60, 35, 80] } ]
        }
      }
    },
    methods: {
      userLogout() {
        console.log("User logout");
      }
    }
}
</script>
