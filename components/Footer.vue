<template>
  <footer class="mt-auto">
    <div class="container-fluid mt-4 bg-dark text-light">
      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="60"
              height="60"
              viewBox="0 0 600 600"
              class="bg-light"
            >
              <image
                id="Polygon_1"
                data-name="Polygon 1"
                x="6"
                y="7"
                width="296"
                height="586"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA7CAYAAABsUTonAAAEbUlEQVRYhcXZy0srVxwH8K95mJiH0qhg1y1o/wCLiAuFSF2IwQdaItZHjClaJU2tIoJVkdA0vbWi1SK5RYs07UKNmkRb7kKXbeFeuJeuSktXddOFr01ikim/ITPEmMQxM5N7YOBInPnM73fOnDn8pohhGBS4KQGoFK8BpSOiKiDKWdG1tbVGUKoLcCgZhlGR4/V63QD+LRTKziWPxzMCgCkuLv6jYOji4uJHSZSprKx8XhB0dnbWRahGoyGUMZlMssEKDl1YWBgnVKvVMhUVFYTKBvOo2+12cJGmoLLACq4/NzfnTEuvbDA/pjMzM5NcejOgksJKrj89PT2ZYUzvwVKsXLQExqkzNTU16fV6vSUlJdDr9UgkEg8uY6LRiYmJudXV1QUhqFiYUPbqTqdzllCdTgc6HkLp3HxhPlIa05WVlSWKVKfTvUokEj8DeCPHuRUAXuQD86jL5ZpeXl7+PCW9x3QvQi7yWJhHx8bG5tfX1z9LS6/g6z0Gpv+NUWd0dHR+Y2MjHaVWJDV8D6XUUooFTKS8YR612+1un883IxYVAvPo4ODgF1tbW58aDAZotdp80BkAbwOgfd6rXDCPOhyOeZEoNRuAt5L9l9l2mcpUdHNzkx1TESi4p4HrZ4qYf2QGBgY829vbU1KMaXpLh/n09vX1fbmzs/OJyPSmttTsKlLhe6jRaIRGo5Eq0r+SyyU5f3MwP6ZWq/WJ3+93UaQSotRaUv9QJI/4+fk52tvbNwmlSCVKb9ZGaAn96PV6hwOBgF2GSDM2giP0w8jIyNPq6upfbm5uEIvFUFQkeNnNG6axLa6pqWFOT0/fq62t/eni4gLxeFxq/B0AtQDeBVDNTfEoAHVVVRWOj4/fr6ur88uAHwL4DcCvAH5MfbZuKfLy8nIEg0GrDHhqBYBJXzLZyAkPhULW+vr6HwiXaMzvlB4yrdUUudpkMuHk5KS3sbHx6eXlpeQTLttLgsXpeQ6Hw8NNTU3fES4y7cpUN1cNhMXp5XBwcGBraGjwi0z77wD+pOWSdplCqj5qugmK2GKxfH92dtZXVlYGlUqFDOcu0+ZTyF0IqfqwkRMWCoU+MJvNkoy50HITi9N7+fDwcNhsNvvE4o+pc/FjHgwG7c3NzWzkt7e3UOScKuJhDlfRSyQYDA63trZ+c3V1hUgkwuG3Qi+Ub0mR3TTQuZ2dncv7+/vO0tJSqNXqZwzDrAJ4M8fm3gjgHzG1THa207Pd1tb2bTgcdiTxTLM9vWXdZQppbNqVSiX29vY+bGlp8VHaBY55XGwRNcaN+dHRkd1isaykjXnWJkX1lsVpQQkEAs6Ojo6vr6+vH8SlKhvHuK3y7u7ux11dXQ/jEte5VFy/p6fnCV3eYDBkqv7IUtnj8f7+/qUsuGy1TB63Wq0ewo1Go+y1zHt4d3f3V2mRywrfwXt7e9nI9Xo94bLDd/ChoaGlJP6yEDCHs8uzzWbbAfBfIb870dpOz7tyfHy8q9AfvAgvikaj0dfxpU0FQPE//b2egZ5K/l0AAAAASUVORK5CYII="
              />
              <image
                id="Polygon_2"
                data-name="Polygon 2"
                x="299"
                y="7"
                width="295"
                height="586"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA7CAYAAABsUTonAAACs0lEQVRYhb3YTYiNURzH8e8dYzFKcvNWiiKSJmRsXCVNIblmOSXK1EzeM0g27KwkLyszxYaRYhbex3toYjF5SVbEThaaokbkXf/6PTrd5r489znn/DZzb8957mfOec45zzknl8/nO4A+4DcRM6apqWkImA1cjg1PA7qAccC9mPAAMB3YBUwGBmLAjfq7GfgL7ND3naFhq3Hy+TowQTWfErrmLmy57eAzgSux4ASfBGzRs78WC7bcBCYC24GpwI1YsOUWMF7NPsv3OG+scn0fkAP26vsmX3ClGie5AzSo5jbDXYoFWx46eDPQHwt28W0+8DRwgv/SzJYJTwtbBtXhbKgtAC7GglHNc2r2uvB64QT/qg63ELgQC7Y8cfACcC4W7OJb0+ANWVXliN7lq2pdxVSbMtPkJPAH6AEeA8sq3eujqd08Bb4AnYL7yhX01dRujmqYrQTulivks6nd9OpzjzpfobRAiBon6dXstlR4NBjVuEP4kHshVFO7OaPefhZ4CSyypXToGiex3r1B87rhY30Pp0p5pRdLOzDDdoux4IImlhFgcYxnbGkF7gOfgTnAcIxnnKAftUweJsJwWif0g1aon5ILIeEicFXoPM3h/xMKLmrP9VbNO1JaIATcLvQNMB/4Ploh33Cb1l7vgRbgZ7mCPuE27affAXNLn2koeL3Q1+pI36rd4AM29LzQZu00qiYrnKAvVNOaUDLCnUKf29yb9uZ6YUNPC22p5wfqgTdmReuBu/RSf5YFTQsbekrokixoGjhBB32gtcLdQh8By32gtcC7gRNCV/hCq8F2tnVcB21e0Urwfu2B7IxrjW+0HLwHOAw8AFaHQEeDDT2ms+rWUGgpfFCondSuDYm6sKGHhBZDowl8QGh/LNRiW5gf2r96HzKVYps220La7GT/QJwA/wDXVosRejMVVAAAAABJRU5ErkJggg=="
              />
              <image
                id="B_Base"
                data-name="B Base"
                x="299"
                y="160"
                width="106"
                height="281"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAcCAYAAAC3f0UFAAABSUlEQVQ4jY3UvUodQRQA4M8ohku6ixaCdopEAv4gAUHBFxAhohZJaedL+Aip7ESwFpKAQh5AtFAkEFSMhQkBQRBL0yQaDuzIcpm5eoqFnf3OcGbOzHY0m81tTOEXbnCBT9jTEoF/YKj1A87xDqdp4AX+ZWDEME7wto6fis06fiphBAsJXz9j9vmEZ2OhWG2DhxO+rwbWsVPAr3ILPCvguxzuK+DzVhyNWSrg6LIurOENptGdgfv4kvB7DBZmPEzblsr4W4BbVatv6rgUy/iGyTouJbzEaFXKRMIfMINFXBYSN1TnuT44WDWmK5Mw19loNOoDtxjD6wz+mav3T6GUmRweLeCBVvyx6mYuvsdCdqvNf0BvAUYcB44D1NMGpThqd7vrEb+Dnefc7oiVeATubIN+YxwH8RI1R4v7cVVdnzhl8Zf6jK+PafgPEO01aaEEhw4AAAAASUVORK5CYII="
              />
            </svg>

            <small class="d-block mb-3 text-muted">&copy;2020</small>
          </div>
          <div class="col-6 col-md">
            <h5>
              <span class="marker marker-light marker-title">
                Redes sociais
              </span>
            </h5>
            <ul class="list-unstyled">
              <li class="">
                <a
                  href="mailto:juliancunha2010@hotmail.com"
                  class="text-light"
                  target="_blank"
                  rel="noopener"
                  title="E-mail"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                  E-mail
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>
              <span class="marker marker-light marker-title">Sobre</span>
            </h5>
            <ul class="list-unstyled text-small">
              <li>
                <nuxt-link class="text-light" to="/about-team">
                  Team Blklight
                </nuxt-link>
              </li>
              <li>
                <nuxt-link class="text-light" to="/about-team">
                  Site
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
