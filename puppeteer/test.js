
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://8081-ffecdafabffabebcfadeaaeabefd.project.examly.io');
  
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('nav');
      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#navigationPannel");
        return heading.innerHTML;
      })
      const result3 = await page.evaluate(()=>{
        let heading = document.querySelector("#lists");
        return heading.innerHTML;
      })
      
      console.log('TESTCASE:testcase1:success');
    }
    catch(e){
      console.log('TESTCASE:testcase1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://8081-ffecdafabffabebcfadeaaeabefd.project.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('a');
      await page.waitForSelector('ul');
      const href1 = await page.evaluate(()=>{
        let heading = document.querySelector("a[href]#login");
        return heading.innerHTML;
      })
      const href2 = await page.evaluate(()=>{
        let heading = document.querySelector("a[href]#table");
        return heading.innerHTML;
      })
    
      console.log('TESTCASE:testcase2:success');
    }
    catch(e){
      console.log('TESTCASE:testcase2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://8081-ffecdafabffabebcfadeaaeabefd.project.examly.io');

      await page.setViewport({
        width:1200,
        height:800,
      })
      const href3 = await page.evaluate(()=>{
        let heading = document.querySelector("a[href]#image");
        return heading.innerHTML;
      })
      const href4 = await page.evaluate(()=>{
        let heading = document.querySelector("a[href]#frames");
        return heading.innerHTML;
      })
      console.log('TESTCASE:testcase3:success');
    }
    catch(e){
      console.log('TESTCASE:testcase3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://8081-ffecdafabffabebcfadeaaeabefd.project.examly.io');

      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('h1');
      const result2 = await page.evaluate(()=>{
          let heading = document.querySelector("#title");
          return heading.innerHTML;
        })
      console.log('TESTCASE:testcase4:success');
    }
    catch(e){
      console.log('TESTCASE:testcase4:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://8081-ffecdafabffabebcfadeaaeabefd.project.examly.io');

      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('p');
      const result2 = await page.evaluate(()=>{
          let heading = document.querySelector("#description");
          return heading.innerHTML;
        })
      console.log('TESTCASE:testcase5:success');
    }
    catch(e){
      console.log('TESTCASE:testcase5:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  

