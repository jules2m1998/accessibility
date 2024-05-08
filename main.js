import './style.css'

document.querySelector('#app').innerHTML = `
    <div class="py-5">
    <div class="container-md">
      <h1 class="mb-5 text-center">Accessible vs Inaccessible Form Inputs</h1>

      <div class="row">

        <main class="col-12 col-md-6">
          <div class="card p-5 bg-card bg-card--accessible shadow-sm">
            <div class="card-body">
              <h2 class="mb-5">Accessible form inputs: <span class="user-select-none" aria-hidden="true">✅</span></h2>

              <form>
                <div class="mb-4">
                  <label class="form-label" for="name">Full Name</label>
                  <input class="form-control" id="name" type="text">
                </div> <!-- /.mb-3 -->

                <div class="mb-4">
                  <label class="form-label" for="email">Email Address</label>
                  <input class="form-control" id="email" type="email" inputmode="email">
                </div>

                <div class="mb-4">
                  <label class="form-label" for="about">What's this about?</label>
                  <select id="about" class="form-select">
                    <option selected>Accessibility</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div class="mb-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="make-websites" id="websites">
                    <label class="form-check-label user-select-none" for="websites">
                      I make websites
                    </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="doorknobs" id="doorknobs-check" disabled>
                    <label class="form-check-label" for="doorknobs-check">
                      I make doorknobs
                    </label>
                  </div>
                </div>

                <div class="mb-4">
                  <label class="form-label" for="many-websites">How many websites have you touched this year?</label>
                  <input class="form-range" type="range" min="0" max="10" id="many-websites" aria-valuenow="5"> <!-- NOTE: aria-valuenow is set via JS! -->
                  <output aria-live="off" class="text-center d-block" id="output" name="result" for="many-websites">3</output>
                </div>

                <fieldset class="mb-4">
                  <legend class="h6 fw-normal">Which format do you like better?</legend>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="apps" id="spas-check">
                    <label class="form-check-label" for="spas-check">
                      Single Page Applications
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="apps" id="mpas-check" checked>
                    <label class="form-check-label" for="mpas-check">
                      Multi-page applications
                    </label>
                  </div>
                </fieldset>

                <div class="mb-4">
                  <label class="form-label" for="help-you">How can we help you?</label>
                  <textarea class="form-control" name="message" id="help-you" cols="30" rows="5"></textarea>
                </div>

                <div class="mb-4">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>

            </div> <!-- /.card-body -->
          </div> <!-- /.card -->

        </main> <!-- /.col-12 -->



        <!-- ==================================================================================================================================== -->



        <section aria-labelledby="aria__inaccessible" class="col-12 col-md-6 mt-5 mt-md-0">

          <div class="card p-5 bg-card bg-card--inaccessible shadow-sm">
            <div class="card-body">

              <h2 id="aria__inaccessible" class="mb-5">Inaccessible form inputs: <span class="user-select-none" aria-hidden="true">❌</span></h2>

              <form>
                <div class="mb-4">
                  <span class="form-label d-block mb-2">Full Name</span>
                  <input class="form-control" type="text">
                </div> <!-- /.mb-3 -->

                <div class="mb-4">
                  <span class="form-label d-block mb-2">Email Address</span>
                  <input class="form-control" type="text">
                </div>

                <div class="mb-4">
                  <span class="form-label d-block mb-2">What's this about?</span>
                  <select class="form-select">
                    <option selected>Accessibility</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div class="mb-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="inaccessible-make-websites">
                    <span class="form-check-label user-select-none">
                      I make websites
                    </span>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="inaccessible-doorknobs" disabled>
                    <span class="form-check-label">
                      I make doorknobs
                    </span>
                  </div>
                </div>

                <div class="mb-4">
                  <span class="form-label d-block mb-2">How many websites have you touched this year?</span>
                  <input class="form-range" id="inaccessible-range" type="range" min="0" max="10">
                  <span class="text-center d-block" id="range-value">5</span>
                </div>

                <div class="mb-4">
                  <span class="h6 fw-normal d-block mb-2">Which format do you like better?</span>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="inaccessible-apps">
                    <span class="form-check-label">
                      Single Page Applications
                    </span>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="inaccessible-apps" checked>
                    <span class="form-check-label">
                      Multi-page applications
                    </span>
                  </div>
                </div>

                <div class="mb-4">
                  <span class="form-label d-block md-2">How can we help you?</span>
                  <textarea class="form-control" name="message" cols="30" rows="5"></textarea>
                </div>

                <div class="mb-4">
                  <span class="btn btn-primary">Submit</span>
                </div>
              </form>

            </div> <!-- /.card-body -->
          </div> <!-- /.card -->

        </section> <!-- /.col-12 -->

      </div> <!-- /.row  -->
    </div> <!-- /.container -->
  </div> <!-- /.py-5 -->
`