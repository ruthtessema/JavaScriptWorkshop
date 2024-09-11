var images = [
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MjA2Nzk4OC13aWtpbWVkaWEtaW1hZ2Uta293Zml6NDguanBn.jpg",
    "https://freerangestock.com/sample/166092/night-view-of-a-lit-mountain-town.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97cea878-3503-432f-8b36-0d72db08b37d/dg78q0k-542681c0-b44b-48ec-8d16-3aa0833d27e6.jpg/v1/fill/w_1920,h_1281,q_75,strp/nice_view_00112_by_futurerender_dg78q0k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3Y2VhODc4LTM1MDMtNDMyZi04YjM2LTBkNzJkYjA4YjM3ZFwvZGc3OHEway01NDI2ODFjMC1iNDRiLTQ4ZWMtOGQxNi0zYWEwODMzZDI3ZTYuanBnIiwiaGVpZ2h0IjoiPD0xMjgxIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOTdjZWE4NzgtMzUwMy00MzJmLThiMzYtMGQ3MmRiMDhiMzdkXC9mdXR1cmVyZW5kZXItNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.hd0fA7J5NMLdmuQPH3kHKmleJm8jLys4EoY8LnMLLOs"
];


var randomIndex = Math.floor(Math.random() * images.length);


document.write('<img src="' + images[randomIndex] + '" alt="Random Image">');
