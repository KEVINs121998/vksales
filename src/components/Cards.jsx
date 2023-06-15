import React from 'react'

const Cards = () => {
  return (
    <div name='skills' className='w-full h-screen bg-white text-black'>
    {/* Container */}
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
    <p className='text-4xl font-bold inline'>Products</p>
</div>
<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="HTML icon" />
<p className='my-4'>Canapes</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://funwithoutfodmaps.com/wp-content/uploads/2022/07/Low-FODMAP-Beef-Tacos-Square.jpg" alt="CSS icon" />
<p className='my-4'>Tacos</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://cdn.shopify.com/s/files/1/0413/5147/9451/files/Oats-Khakra.jpg?v=1605942595" alt="JavaScript icon" />
<p className='my-4'>Khakra</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto h-20' src="https://img.freepik.com/premium-photo/corn-chips-with-cheese-sauce-on-gray-plate-and-striped-napkin-on-white-table-top-view-mexican-food-photo-vertical-nachos-snacks-close-up-above_167042-270.jpg" alt="React icon" />
<p className='my-4'>Nachos</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto h-20' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUXGBcaGh0cGxsbHBsbHR0dGxsbGxseGxsiIiwkICApHhogJjYlKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHhISHjIqJCYyMjI1MjI7MDAyMjIyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAQ8AugMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAQIHAP/EAEkQAAIBAgQCBgYHBgQFAgcAAAECEQADBBIhMUFRBQYiYXGBEzKRobHRIzNCUnLB8AdTYpKy4RRDc4IVFiSi0sLxJTRjdIOzw//EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAqEQACAgEEAQMEAgMBAAAAAAABAgADEQQSITFBEyJRBRQyYSORgdHxsf/aAAwDAQACEQMRAD8A7NWK9QnrLjWtYd2T1zCr3FjE1IGTiQTiRdM9ZcPhpDtmcfYXU+fLzpQxv7QLjEi2ioOZ7R+VJmOBzGTOpkniarIfdWlVp0HfMVexj1xGm/1nxZUM1x4eYiAOzvEeNUv+YcR++ufzH50HGlbA06tKAfiIAu2e4x4brLiP3zjlrM+2i2F6531PaKOO8QfaIpLskTVm6w4VD6as9gSRYw6M6Z0Z1xsXNHlG79R7eHnTGrAiQZHMVw1DFM3VzrA9hgrEtbbcHWJ4jlSV+iCjKf1D16jPDTqFerRGBAI2Otb1mxqYr1eoV070xbwtvO+pOiqN2P5DmakAk4EgnEJkxqaFYzrHhbWjXVJHBe0fdXL+mest++xzMQu4RTCgfn40GNyddKer0WfyP9Rdr/gTrB68YXXS4Y/hGvhrWv8Azzhvu3PYv/lXLA9ZWmPsa/3B/cNOtWet2Gb7w8QPyJq5a6wYZtrqg/xSvxFclwgnMDy08a0YkEQeNVOgU9EzhqT5nb7dwMJBBHMGakrj3RuPu2TmtuRrqJ0PORsa6V1d6X/xNvMRlcaMO/mKSv0zVc9iMV2h+IYr1er1LwsxQLrbH+HJPBgfj86O0t9emjCnxqycsJB6nIMW0k+NRW9q3xAk1i0h2rXq6zEnm6VkGprOCuHZGPgp+VWF6Lu/u7n8rfKmQ6/MCQZBZbWrWIu5tTFbWMAwMFWHeVYD4VLj8IEPZZW0+yQRU71JnYMoBtav4R9RyodG9b4V8rqe+DV7F3LKqcGdr6H+otT9xR7BAq7VHoVpsWz/AAir1eabuao6nq5V18xDNinBOiAKo5CAT7Sa6rXI+vTf9Vc1jUfAUfTD3yln4xUunWtkqOalWtdFiTNJeOkxA3jeBPlO1eUV62K3RDR1xBEyzh1HExWt3xre0h1gVpcHOuGMzpawz10DqIoyXDzZfgfnXOcMdvGukdRPq7n4h8KQ1/4f5jGn7jVXq9XqyI9MUtdeBNgKBJZoA/X60ploX0/hTct9kSymQOJHGK7OJ05zhuhLS63O0eWy/M+dEbbomiIB+EAVg2yTJqezh+dX3s3mU2gTAxTngfbUqX7nI++r1mwBwqyiCrgToOXEXfumtLl4N9ZaB/EoP5UctpWblgGp5HmRFm70Vh7mylD/AAn8jQTG9APbIdTnQESRwE8Rw8dadr+AU9x5iqWVkMHUcDR11Dr5zBNUpjL1f/8AlrX4aJVR6Is5LKKNBBIHIEkgeEGr1JN2YwOp6uP9eFLYm5AntR7q7BSF0hYUX7jkSxZo7hOw+dFocI2ZSxdwxEvBdXrjwWhB/Fv/ACjX20asdXLS+u7t4Qvzoi7E91eSyTR21LnriDWpR3IreAwq/wCWD4sx/OrAt4fhat/ymrNrAjjVy3hFHCh+o57MtsUeJQU2P3aDwDD4Go7nRuFf7OU/wsfgZo6mEWPVFRP0eh4VIscdGdsX4i3f6tje089zaHyO1M/Uu2VS4raMGEg77VUuYMpqpkcjRvoHVGPMx7B/eotuZ12tJStVORC9er1epaFmKo3ukUXQdrw29tAus3T62iVzAKu/eeXlypKxPW8/YUnvJj3QT8KsiljgCVZgvccb+GR3ZzpJmBsKkS3bFc7brLebbKPIn4mtF6Zvn/MOxiAo/Kmk0zQTXLOmB1HL2ipVurzHtFco/wCMX/3r/wA0VsvTF797c/mNGGkY+RBHUKPE6yLg5j3VIda5bY6bxA/zCfGD8RVu31ivgfYPeVE+6K46Npw1CmdENusW8KrH6TYcOB8TwFI9nrZcHrIp8Cy/OiGG64WyYdWXvgEe0QfdQ20zgdQi3KfM6GhEaRHCK2pY6O6attrbcHmJ+I3HjTFh7wdQwpRkKnmHDA9SWlzrBgIPpREHRh38xRHG9LJb0HaPuHnS70j1iX7bKBMgVCgziZXt4VjsDHPYVes4XvFLuI64JMKpY+wVVbrc/C2Pb/amlqZuhAmxR5jsloDjUyKK54/Wu5wCj21oOtGIndfYfnVxpXMqb1E6YtYy1zqz1lxHFh7D86tf8z3x933/ADqftXkesseXSiOCZAoRdI4Hf+9c7XrddG6KfMj8qIYTrbbb10Yd41ob6Z/iXW5fmP1eoN0Z0wlzZww948e6jNKMpU4MMDmcQ613CzuSftn+o0vs3wFM3XO2FZo4u0/zH+9Ks6U9SeIs/cnttpViw5Ekbwaq2jpVi2dD4U6CIuZpNbrUcVeQAACh6jUilR8xjS6T12OeAJHbNTK9YcceVaiiaa8XLugtVpjQ+JIxqNTrWa29EOdWtvSrG7zK0aWy7O0dTVsRBlSQRtGh9tMPRPW9kVlusYI35kAkBvnxoBhOj2uPkDKuklm2AkDXzIHnQ3HWzkcEQUaCO8EqfYao5rsX5nBLKmweIY6R6xvcJykge/8At5VUYO5kKzabgE++hARgoJBAOoJ4imTBnsAUEKFXiS7HOTKuH6Nuuwhco4l+yPfqfKi9roBY7Vwn8K6e0n8hVYXXVhlEniNdoP5xU1vGXmYoFAIWToYnKSNZ4tHh31AdhKN+pKeryn1bhHik/A1PZ6upu9xm7lUL7zPwquExLQSyiF5iJIXcDcyD3QRVpLN/s5rgngMwGuVdoXXUuTpB7NT6jfMjAhC30JYiMjfzNPy91RXeri7pcIHJhPvEfCrWAW4qqrsGYKZMnXtCNCNdBE8wdORJDwqvqMPMniLx6voB2rrHwUD4mq13oZ11tnOOUQw8p18ppmurVV1oi2MfMExxBOAS5bZSVZfEEfrSul4djkXX7I+FIgAJUHjsddDzp6w/qL+EfClNR2I5prAVnKOvKwW/G3xak1TpTt+0BYL/AOofeWpNRPZvVUsCqMw/pFycSTDqTpRK2gAqPA4e5cBa3aZxtm7KjTgCSJ8qkVjLKylXXRlbQg99J36lnbjxNPS0VqMdmV3w7My20Hbdgq+LHfy39tPlvqrgwADbkgAEl314Tvx3oB1Xwua815vUtgqpO2cjtH/an9XdR7oDptcUtxkgZLhWOab228xPmpoVmpO3Lc4gHQK52xQv4U2rt2ydQjSpO5RtUPsMeIrVF3mj/XHDQbV8DY+jufhaWtk+DAj/AHCggFXo1RRDt8xlaF1ABbxMMgrBOwALEmAFEkk8hUZxaD7Q86zaxHaV7brnRgyncSNpHKqWXNZgMY0lddQJrAzLWExb2W9I9q7kgq+ZHUFT/FGhkAgnlQvFuLi3WiJ1A5DtEa0943HNd6NuXGADPYuEgTE5WBj2UjWLU27scvyetPR49M4mDrHLOCRKWIuKUQLOi69xgCB7PfR/DL2Rp+opdxdsKxVdhHvVT+dM2GTsjwHwo272iKOMmaOpzDK2XXcmBtz8YqybFzZroABEeUe3byqNl1XWNdx4Gd6iy2p3c9+ukQIBgabaiakQDfEvPZE5vSBVYk6bHfczr+o1NTq1uAPSRlUpMDaAd9dYSZHI8tKtm7baEgxmJWSRA3zAgyBJP60qQ3bS5gbR3aN4YKAB5GSBwGXfapxKZMt+jtaEOx7QBKxrIYeyJGnhVm1ZtyWW40KMx3iBzI3iCI5VTTELBHojuYA22OWfLhx7VWsJdt5gno8ubTTYzJIYctNOcjnVSIQGTPbBZnS8qkkTtpMaHXj4Vi5YuAaMGOojXUEk+0aDyqJL1omDbZY0EExE/CYqexdtoCJK6nRt9OIMaiBEd1cDicwyJjDMSy5ly60+Yb1F/CPhSOCMykGdfHlTvh/VXwHwoN/iF03RnMP2hrrc/wBT/wA6T7KZylvbOygnkCdfdNOP7R9Gf8c+40mJcK5bi6shVo5gGY/LzpOzO2alPnEb8R0wlhltC2xAQHsR2QdFUKYnQTuNxvrQTE33xF4lEyu4Cqpg5VUau5G0TJ7oFFf8HaxQF1LjgwAShWYEkB1I7LCY+dYbGYbBqy2/pbp3AYO5P/1HGiKOQHlxrLRh0Acw6sFGR3LmJ6St4K3atKrXCQeyCoJH2neRHaedOOv3a90X1ot3biW/RNbL5gDmUiVUtBAE6xoeZpMxGIuXLhuXDLsdeQA2VRwUbAfOrnQPSVqxcuPctM5bJkZUtsUy5s0FiCsyNR92tCz6f/BnBLRNb8vg9R/xmHW7be22zqRPI/ZPkwB8qQ2Y5CuivPozP2WnIZ7gZ9lH063WP3d/+RPyuUH6ex1m/ctvatsGhvSFkClvVCTBMkQdfCktBpbwdlikCNDVLWCVPce8Kba21t23RlRQohlaQBHv38zSz1sCC7aRbaKwVrjlUVTB7CAkCSD2j5ClZsMn3F9lS4REDorN6NXdQzyBlWdTLaCO/Sn3+mPVl85/UBTq1LDMcEb/AOFn/wC3uf8A9KVMMZs3fL3rcp0t4NDhjZtvmTIyZpD+sGknLodWmB4UnJbZEvIwGZWgwZEqLg0OhieYqn0+47bFI85lNQuWDCC+kT2m/wBv9C02WB2R+FfhSr0ohBnSGAjn2QoM004Fptj8K/AVoK+5AYq64JmzoCVnXWrz2l07I9g8NKHY6wXXKDlMiDygg/lW2G6Pe2ykPKxr62+g2mNgNeECjK0WsXjuX7ccCPd+v0Kso1DcN0cEYOG1gjYbEg+3SJ4+VXVGonhr7iPz/QJBOORE34PBl60asK2ndVW2a1v3JBXskQc+onwiOXAxpVSJdDmEEIIB0IOo4gg8RWXsIw1UE84148d+J9tU0y21J1iZgSd4Gg3k71esOGEgyDtQ2jCyobQUqBoAfzFO2G9Rfwj4UnXh2l/XKnLCeon4R8BQLvEPpx3OX/tM9dvx/wDppB9Ny5Cn39qOlw/iH9I+dLvRvRSGx6RlDFpOrEZQrhAAo3ntGTpoBxoKgbeY2GYE4gpVttqy1MLiqIVYoh0/hUthMiATcvDTklyF9g0oy3Qdm5cIbMJe3bX0eVQM1oPJGXmD4zV1qQcwhvbHGIoMxNa0c6sWEOJZGVXYJcFsN6pdfVkeANGk6OS+uHF+2Ld1/SEi2otkogOWVgga5faedO+oFOImULcxNQ61ODTNgurlm4wZTdytZt3VQsgYekJDSxEQoAJ04+FVOicJb/xy2h9JbzuBmHrAIxEjxjhwq4sU5x4lNhEClqjcg6U5HojDXbcWT2muqudtcgcE5InWAI7zQq/1eGpt3Qfo0uAMhVjnuNbiJOUBgJJ2za1K3qe5xrI6i41tQZXsngV7JHgRVrCOctyWJJBJJ1JOS4ZJOp1NFsR1ZcBgro7yMuUwsfSh8xYCMptn2GhmEtlWuoRqquD4qjg+8UN9hUlRJBYEZgd7rMJZifHh4DhtTn0S/wBGv64Ck17JRVnjqPDwpr6DfsD9cBQCBtksfdC/o5FWVGlVcVbdrZCGG0ggxxE6+E1CljESC1xYGkA7jszPZ30Op5xxkVRsQdiZhBFrFUG6OuFbY9KZQ6neR2NP+1o8R3zaw9t1ADvmIO+vGe/Xcb/kKaRsxOxAPMs+kyxPH5En3CrFoAmQdNR7z+ZNDEuF20Byho5cJJKnYzp4cqIZ4heek+U786sYNRjiWHYhhxG0ATzmTw/tVnDKFED57md+86+dUrHOdDECZ20MfrnV2y1DaHQ8zF4dpf1ypvwnqJ+EfAUo3vWWm/Ceon4R8BSt3iPU9Gcu/aik3SOJIgc+yvvpETpG4EVFaAoZdAJyswcgk/xAU9/tRtziO4Ks+YHypGvKpgE5W+9wP4uR7x586WS0A7TGyhxkTFzF3LnruWgsdebGWPmdamfpC7M+kuTIM5mmQMoM8wNKrNbKmGEcf7g8R4VtYsPcdbaKWZjAA404rL3BEHGJhbjA5gTmmZB1neZ3nvojhkxV1vSW/TXG2zjOTHLPy7p4mmHo7oS1ZgsFu3ebaop5Kv2vE+yizXWOhJjlOg8BWZqfrNVZ2qMmMV6RmGTxFO30XjlKtkvAoMqkMZVRsFgyB3VVd7tu5nY3EuSTmbMGkzJk66yad1r2IcsuQgMGIUBxmEsQAYPKZ8qBT9eDNtZe/iXfQ4GQYkLjbgUqHYKWDkDTtrs07gjxqa709iCWJuSWTISVTNl1MAgSPWOo191XesPRQW+UsJolkO6jUjtFc0bkxBPtpcuTW9Vali5xEXQqcQ0/WS8TLC22wPZjMPpMwaD9r0jSRG9Q4J2uXLtzLAb0hPIF0uPANU8PhswzsclsGC3M/dQfabu4bmKPWcTb9GLaDKB6TTiSLdzUnmQQT+URQ7bkQ7R5l1qZhuPUVg7XciqNRoPPix7opvwOG9GAu/M98Clfoi4Eyji2hPLl86P4DF5ydNZOnfvPxpX1yW2+JZqfbujDZ13qYppVIWy6FQ2UmIYcK0To67Bz3ZGQqIB0JVRMfiWdedFU4MXYZGYQCVGRVXAdHG005y0iDM7cI18Btwq467dxn+369nJtDErVmgAmdJ58TG3xqdQCIIkUIvdFq2gePW21Orl+fDOeEzB7ql/wrOzn0hAYyuUkxrO0gcIEfGi5gNoB7hZBAAAgDaKtWjQnDYRlYN6Rm3kEkzI7zpROyao0ImAZNeHaXz/KmzDeov4R8KUb51Xzpvwf1afhX4Ckru5o0dTmX7TzF/bXKvwikSzhpMnUk10H9pNv6ctE9hI8Zb8hSRbeMrgcfgazHbDECa9KLgZhpMHbS3luLnESdT2Z+6eH6mr3RfRyWVLqSWuDQmAVt8tPvbzpIjStLaCMpExtpM66SeUmsdZsVktuAYLEIvgNDHgoNCuubYFU98f7nbF3ZPiC+lesWUlLUEjdzqP9o4+NBT0rfJk3Hnxj3CBR/q/1bs3rS3Hd2mQVUhQpBIg6Ez7KIP0DhbebNkTK2RVf0lxmYrmBYK4hTrsDtMjYRVTWvtxzKPY3cC4DrLcUZXUXO+cpA21gEbkDYedNfQWKGIIuKMq237QO+bKeyO7tAz4COUGGw1pVZfRMlsoM6uols2XKwyrIUdrXbRTpvVDopxgnvqWZwHQkAfYeAjiOIJg84HdI3oqDbgORLB2IhHpJ2sn04EXAU9IY3WWZ/HIHRV7xHdUd7qsjs95IKesLY0/EJ5TqF0mYkVD1j6RS81qwrqbbuDccdqCrDKmmgzE7nlTDh8VktuTAGm5gCTl+WlFXUmlwp4yDKGrIz8RNuDIA1xwbTwoYQBbIByEJsBEzAggmar2LeVgp0MXCdu19Gy6e33VZ6VwDQymGtaRBEgiNGXffiOdVltAXEI0gOI8bbn5Vy2byGBhPT9hI6gPBMOy06ruDz5j3e+jfQd9dSIUaFjoT2tIHdQXBpI1A4TGvCiFjDmTl0BAnWNNYiilsHIkellcxmdCbbqGy6Rm109mtew1iWtH0wZ0kRqc2bMTm4jf3Dyyp7JB1kgbxuQBr48anQ2wdrQIn/MIIjmI4T7zzrSHWZk9ZEojBWgABd+rIYmJ7bMux4aW+GvaBJObW1hsSqW1VrkwAwZgwJHaOpkzop35bVKxtwezZiQW7Z0knKfU7z7/LR2tmJWyYB5mApOaOxsCSOXaimEMXfnuQLZtm5Iua52bsrqCZB7TTG+ukbaCp8BgBaaQ06RtHEHn3DTnJ41gOkiBakHSM0zEnZZO4JHCRImpTiYmSgiZ1OkCTOnLWmFxFLCYQU1PaoYmKAPrJy3bcbjbU+FT2sVOxQ6ZoBaY/l+Nc0isES9eO3gac8CPorf4F+ApKxJ0HgadOjW+htfgX+kUhf2JqUdTn37QT/wBTHNF9xNJd1NCJAPAbU2ftHScWh5BPDc0pdIA5gQJ/96yLRhpr0thYY6MxIJQMQDIkbzBHka36ewPpYScpzmGOsQGJkcZAoHdQgDNMGdfzB500o4uor8GAJO0OujajYzr50pZ7AHHgwxGf8yt1Y6Ny27qm6GViv1ZIiANyeJBXTaAN+Ja5fvqptth1uiMuZHW2CCIIKPGTfYFvGgOKtejdWN667iSi5wqrOhYhQBHDUGdd6v4bF3mUA3NeYRPzBA9lN17rBuX/AFAmoyRbVwN6TENlUQFQMHdipzKCwVRObtZVBJIBLQBQprFz0l5zlHpMoiCcqKIUAyBIHGCJFH7eFHrElmj1mJJ8AeA7hpVbEpTNVak+6XrUZ5gHHW5RhOsGD30z9GXEuWhceMrIjGTAmVP9QpZaxdvMyIoRRozsRIkfZUamedHsX0arYe1YzEDSNtRbBAB8SSf9tLawLZYqqeR3+pNhz1BHTfSaXHVbagordpvVE7ac9z7arK4NwDWSD/8ArcHhRHHpbtWwLaDXsqSAWzN2dfAHbbfSg9kn09tTqpzwe4I+9DpwPaPBlVcBCIHwDyuvjRfC3u0ZIEqV1GYaxOkjWPjQTDgsNDrpHfsIq/0fbY3AjgiRpPHuB2ozDn9yPU9mIzJEECYDJHgGWKy+RbhYo+rMCQRBGkxKcS33p4TstYsqMr7xJIjU9kyInwq1YxqRJuuOfZXTQMdQhG3fwrUHCiY+fcZAbyMDaKMwjcMGUi2HfsnLESI2+0NBEVohSYVASSRmzErL3ArZLgWSYhgdyByE0RbFJMekb1cw0XUZc2hyxsNjG3dWgvgnKXcNqIIAgruJAI74nY0xXAvB4Fsqr5BLEk9uST2dNtW7ROXhDbVLdc6FrRMqCwDH7fZIgbmF4e6plxls6ekeTpsZMQdss8ePI1gYq3AOZyDtGbmR+R9lMLE3znqRWigA+i2iAWaRr6w02gAk+HGrWFYEt9GVOQ/e10A5RsRr4CpsKyuJDN39o8p/OrS2Rzb+dvnUETlMlxI2p26N+ptf6a/0iknE8KdujPqbX+mn9IpC/uaOn6nNP2nCMRP8CfE0sWcUlxRJAbiDz7udM/7UQTeAAJJCgAcyDQfofo1LQDNBfnwXhp/5eysu4DJ+Zpo+1ZYwnRJbW4TH3ePmeA8PdRuxYUL6MAKvCB6p5x8ajOKtp61xF9p+FS2cVaf1biHx0oRTI56lWsYnMXsTZdbj+kEMSY5FRopB5QB7++p8NcijzhWBR1DAHY6x3gjUVQfoy1PYuMncwzD2iPhTlV6KoU8YjFeoXGG4myYqBUF+5NS/8NgCbyga7K5230jvqaxhLQOpa4eXqL8z7qZTbjKxhdvYlTozAu9wOpyqvrngVO6d5O45HXxYL1vMII0BEd2XaD+tzWFJEdmF4RoB5Vi5iANmHsn86Xd61Yse4FmyYs9L4Vv8Th1Ns+iLkl9wzwxAI4HSdd50moLgVWtKkEZ3HsW5l178p9tM73zxAmdN+RP5e6lhsH6O8mUkqS2/DRzHlm3/AL0uKwW3L0IJlwpxFvo0i2q594c+XD41ew7MbxRtUAFxTyAgjXx08qhw2HD2xO8QO6QKt4KwRoREwvkNfd+dEVMuP3B2HamYZwidjUAyNQeM8D7aJJhbYYpltyB2tAIBBAG/dHmOdVbY0McvhVn0/bL6wTMGdggAGg3zCZ7yINPsTniIIo8y2mEQ8bQ0jYbRHPaDHgapYhFSMlvNBYAII1jUgcR2iAe9uEmthdPZGfQG2ftA9m4WfYRLKAJ7joJrPSIFy2AAW7bkgNlIEjKZ4aAD28qmtm3ASLFTaTKa5dFGHYDb1U0ExrrtEHyqXDHMO1ayRzync6xFU3wW30TcdPSAcTy3PHltyrKdGLP1c/8A5CPCtBczMcA+YYtKBsIq0tDcLZZBC21EmTLseXd41bUXeSDzY/lUMZCDBkuJ4U79GfU2v9NP6RSPidh+uFO/Rn1Nr/TT+kUjf2Jp0dRF68j/AKif4R+vfQJUDBlPFGI8o17jJ99HOvOl9jyyHyywfdNBFmAUAJ5SBKsIME+R/wBtZGqUjDRpT7sTW1hAygSY3111qZcKqjLzFTYZeyPCpY1Fefa9t3J4je0YnsNirNtQrXIbcggkj2DarEowJRwaq3sIGOY1cvoMi93lypwaxGXBgjWZBiNk/E3wWsfSQPRZcwP2tuUeNYv+qh/ib4JUGF6RUEprJMCBJJ7o8K3K3AoEfQ/wiR3OlMUGKFUJmCCIHtn31EnSVy230lmTx12+NWr1yEFxboYElYIYAMNw0QQR4VUxeGcNL2iAN8hJBJ1gkerpJk0o2fIghtEIf8UF2BbUhgQTsQBx91VsYv0invPwPzqLo/DFXJUFRrAjfYyCRw107+6rOJWWHcY8yCT7iKa0eW3fEXttCAj54ir0PrbU8THwothVkzwGg+Lfruod0Vbi2sbtt5jU+yjmHtgAAcBT1VeF3GLX3AqEEnzlUZhwUn2AmhWC6evvJyIcqkxDCY1gGd48aPJalSCNCCPaIoAnRzWisW3coWOZYIIYQNBqNNweXfS2pZxysWA55PEJP02pto9tczXDlVJ46TJ8x7R5U26YugFmFsLAIMN2iyK2VRm1jMJOw8wDDgMJcQDNbuAZnOinN61pl7hJXjwB3OlTPgnaFyZUgBmKwAokFURlzDeZB3OvE0ZWsYjEWb9wtir+SNJlo8BBMnuEa90mq9jpBjEKJIBAnm0RHx8anxAYxln1pMGNIOx8SD5HwrGFw7iCWMyJ1kEZdRGw7fLhNafMU4J5k1zFOpjJx5kzoDpHc3H7pqzg7rNmzLEHTcSD4/ruqomHuwBI0IPrMdQGB4cSQY7o76tYDClJly8xvwiR79POedQYRZLjNh+udO3Rn1Nr/TT+kUj49oUeNO/Rf1Fr/TT+kUnf4j1HRiZ1uacS6/wL8KA4OwwleAPZPcdY8uffRfrkP+rbvRR7hQr0OaDOqncbMORrJtYvuQTQNYADSzZAnJIkDUDfkJqd1AE7QR7zH51WBt2lJCgZmGxMToJPLT4Vm65eJUKk5tSDmjaIkQDrvvFYraNuTjj5hPVUeZbrbFaKBVXBYoxFz1gSNASCPsmY4jhWj32YnMAACQsa9ngT3nlSy6Zqzkmc9g28T2IfsL+JvglU1tfSIU7DAk5wCTJ59w/M1YvnsJ+J/hbqJGivUaevfQPmaWmTfQIGt57iFLQAGcsbhzAdsk5iTqQY3jhG8UQxF5gGW1cZmiACMhaSBE/b0PGIE6VFiMKlsDI1wKdWWezK7a7xroOFRYVWa6uSQ06RvsdvKffQTWc4gBVhTu4xDuFxDejGYSdEVeZAiPDifA869iUyqgJElt+LEyWgcefnVvA4PJq2rRHgCZIHnvUHSqdu0JGpPDUiOHITE+Va9VYrrx5mDdabbM+B1FroO39Gp7gB4fr8qM4d0JhXQnkGUn2TND+hU7C78Kzh3OdAzrEoFSIYMJDaETz41a1uhKJ+WTDuw034ePCqDX78ENbUmNwR36DX9d9XDt5UJTDFgALo4DUkMZzakHXWeEaAeBoi/MIzSf8AxF7Uej31BkabwNDzifOtmxFzhb07212Pu2HnUXobkkC8NNIO+jlp4CeERz4ViLgVVNxBBDTJOYABSvDskneTuNKbRRFLDLVm9czAFNIHa5diTp3Np5jfU0StLQhkaEBcArAJljJ010EzCtoeZ10qWzZygKbw3XjrIJ8tZjyHM0Q9dwCoCcwyq1t6RF3ZR4kfrahT2rema4ugHAEmFgnfeBI00M1aw2DtOvZYkaAkaTEtxE/aB8hQyRDKgm/SLSqxrOvu0p56K+otf6af0ikfFpAUctNe4cae+jhFm2OSKP8AtFK3+I5puzEPrzdy3mMSexAAk6AEnwpeweOz3FRFbLrmkcdNvCD7abetw+luQYJQa8uz/alnD9I5beqMXg5SBmDfdzFePM91ZyoA+4/MddyU2iFDbBEH31CMDH1bFDy3U+INRYTpNRK3WCkHRoZQeB0MxB9uhq4vSNnf0lv2gVoqykfIMz3Q5lRrdwborD+AlT7Dpw5VqZ/d3R5BvlRAY2z+8t/zL86pp0ws5sq5JOuaWgNlLZY2nkZjWhPptO/5Af8AkqDaOjNGXMqjLd0LH1BrmCj738JqS3hjwtOe9mAHsAn31f8A8fZ/eW/5gayOkrXC5PgGPwFMIlda4UcCFXVagLtBwP1IUwTEdsIOQCjfnmOvxqfA9HLbJaJY+7wrK9IpwW63hbb8wKiTplWByW2IBI1ZEAIE8TOwPDgaEy17vU44/qWFtpXaSeYRVKo9JtGQfxD4E/rwqnc6XuEdkWx4Zrh+z+FftrxjWqT4h21die0N409cGANBOnPWdan1FbODBivbiU+gryG2sETG3H2UU9JxmkrAXBkAI2B38OE/Ecqa0bSKsCWHIkMAp4MthqFKQILWmDCD2c0DeNP1sOUURVqoIxIhLy8u+YJ3JOukx3VIErmePo2ljbIMgksWA1JAkieXL7QrH0Ukm28CeOmhji22nHnUqPcO122Z22PnpVkC4Ro6TA46A5tezGs8DuI76OIBu5CERTlFtmUgMSGad2BEb6ayJ7t4qxZVAullyNTx1/8Ac/Ga2UXIg3bYMgjUbZe1pxEkGe4GrZsXHUD0gBGYEqePDaNR/euJnKMdyLDKGnLZHHtETrLaQd4J2nie6bFoXANRbt6iYy7AmeB7q3TAanM07xvInN3/AMXurdei01JLHfjA18KGxhlEjxhMAHfSe/SnvBfVp+BfgKRcb+dPmCH0afhX4ChXeIWjzE/rYAb7CfsLPONRSVcsOsZreYSADE7SBAWDHHXkaYv2gO6YoOsj6NdfNgRSs/Td4HRgPBV+VKLWH4MYd9st2cO1w5ZYuoZwDmTXMhEA7SCQKmF8KArFwQy5icwbZ50PCQJitcJ1iEg3bYJAjMkAwdYg+HMVYv8AWK00H0JYqZBYgQe6J9lMfaFgFwcCDNg5Mrm6WAClpB1jtkbSzQPVDaDiQSamfFgDstoFu7niFBXcA8451thOs4TT0CKP4DB+GtWn6ZwdztPbYtEaopPKJnWobQZx3xIFw74lFsWde0wHoiAGIzF5B9sNpzFEjgjYIME2swIYScmskMJ24zB5VUxPT9oiEw6nshZeNlEKIHLxre31rucbdsjuzD8zTH2RZSuDgynqjOcyDC5rkBFZmCAEgZiJZwYDEDUH1qIHom8luVW22YdpFEMDkZAFO3GeGpPOq9zrSQOxaVTzJkDyAHGg+K6XvXDLXH8FOUDwAgVKaIAbccfuQ13nMLt0ViDGZlA3LSSYJQmFOg9WY29YaSKG3sVaDratu7tmEsQMsgQYM7ctPCqZuX7gyB7rg7rLMPMfOrvRvVa61y2TCsTCiee5MchJ8qu9aVoRkSqlnYRawHSuW2Fa2raQSSQT/emDDdJ2nHrhD91zB9ux/WlD7/Vm4jMmzqSCp3HnyO/hVZujbibo3jE/ChpYhUcy7oQeoyJjLW3pE9/xAivW+jLR7SLImZRpE89DvSsVPEGpbNxlMqxB7iQauEB8yhA8Rsw3RYDBgGJiOG0RrpU2G6HRZAnULIzA+owYGOegHgKVHxVxhDXHPcWJ/OtVkUUVGD6jjb6FtqIhwIiJ7gBwkRHDnRDDYVbYYzlDGSXaATxMn8qSrPSN5dFu3APxGtblx3MszMe8k/GrCgnzOyI+2sVbJgXLZPc61rjekbVodtxP3VhmPy8TSDBqfD4W4+iozeAJqDQoPLSwbjgRiTpS3cMQU4ySDPdoN66Tgfq0/AvwFcuwvQV7RisagROvnFdSw1oqiryUD2CKR1BXdxGalIEXetWBYt6TLmTKA3HLBJkjlrvwpTfoSy/ADwMf2rqtBMd1bs3CWWbbHikQfFTp7IPfSZDKcqYxwRgxAPVdDtcYew1j/lM8Ln/b/emi71bxC+o9q4O/Mh9kMPfVV8Fik9ay0cw9sj+ufdVxqrUlTShgEdUn/eD+U/OpF6oP+8H8p+dGFuvsVb2r86xex5T15Hv+FE+/cf8AJX7ZTBqdTzxuD+T+9Tp1RT7V1vIAfOrdjHl/Ulp2Gg+MVds4TEvtZIHNmSPcxPuqfv7D1O+2UQcnViwN2ZvFvkKnTovDJtbBPfLfGilvoG+3rMieBZz7IX41at9WU+3cdu4Qo92vvqh1FzSwrQeIEfFIsKqiToqqJJPco3o70H0Yyk3bghyIVd8q8Z4Zj3bbc6IYHouzZ+rtqpO53Y+LGSfbV2qe4nLGTx4gfpnoJL/anJcA0cfBhxHvpWxnReIs+vbzr99O2PMRmHs866DXqgqDJzOYLdttoVU8/wBGsjCWG3tr7BXQcZ0ZZu/WWkY8yonyO4oVe6n4c6o122f4XJHsfNVf5B0ZPtPYiqvReFP+XHt+dSL0Nhfu+9vnR4dTwNsRc/3Kh+AFbjqqf35/kH/lVhbcPMjYkBJ0Nhfue8/OrCdG4YbWx7/nRlerHO8x8FA/M1KnVq3xuXD/ACD/ANNW9W75kemnxBCWrK+rbQeQqdMRJyosnkNfhRq10FYX7Jb8TE+6Y91X7NhUEKoUcgAPhUZc9mThR0JQ6PwDAh7kTwUbDx76K1is1OJE/9k=" alt="Node icon" />
<p className='my-4'>A1 Masala</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://5.imimg.com/data5/ZI/OL/GI/SELLER-1462641/regular-popcorn-500x500.jpg" alt="GitHub icon" />
<p className='my-4'>Crazycorn</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 h-20 mx-auto' src="https://5.imimg.com/data5/SELLER/Default/2021/3/EP/OZ/OV/83784286/alsi-250g-500x500.jpg" alt="Tailwind icon" />
<p className='my-4'>AtoZ Mukhvas</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://www.mariebel.com/wp-content/uploads/2018/10/vol-au-vent-55mm-mariebel-1286x1286.jpg" alt="Mongo icon" />
<p className='my-4'>vol au vent</p>
</div>

</div>
</div>
</div>
//     <div className='w-96 py-40 px-20'>
//       <div
//   className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
//   <div
//     className="relative overflow-hidden bg-cover bg-no-repeat"
//     data-te-ripple-init
//     data-te-ripple-color="light">
//     <img
//       className="rounded-t-lg"
//       src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg"
//       alt="" />
//     <a href="#!">
//       <div
//         className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//     </a>
//   </div>
//   <div className="p-6">
//     <h5
//       className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//       Canapes
//     </h5>
//     <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//     A canapé is an appetizer consisting of a piece of bread or toast or a cracker topped with a savory spread (such as caviar or cheese).
//     </p>
//     <button
//       type="button"
//       className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//       data-te-ripple-init
//       data-te-ripple-color="light">
//       Know More
//     </button>
//   </div>
// </div>
//     </div>
  )
}

export default Cards