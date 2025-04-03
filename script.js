document.addEventListener('DOMContentLoaded', () => {  // full html load aana kapro dhaa this shld be initiated
  const getCookie = (count) =>  // cookies normalla( "user=sreya; count=5" ) indha format la dha irukum
    document.cookie
      .split('; ')  // changes to [user=sreya , count=5]
      .find((row) => row.startsWith(count + '='))  // row ndradhu i maari array la traverse aagum idhu valiya it finds count=5
      ?.split('=')[1] || null; // thirupi adha split panna [count,5] adhula 1 index element 5 ah return pannum illaya null.

  const setCookie = (name, value, days) => { 
    const expires = new Date(Date.now() + days * 864e5).toUTCString(); //currentDate edhuthu adha expire aagura date ahh millisecondss la maathi adha utcs format la maathi expiry date ah vechikirom
    document.cookie = `${name}=${value};expires=${expires};path=/`; //adha store panrom
  };

  let count = parseInt(getCookie('count') || 0) + 1; //oru cookie oda count ah increment pannudhu
  setCookie('count', count, 7); //adha count la store pannudhu
  document.getElementById('countDisplay').textContent = count; //display pannudhu
});
