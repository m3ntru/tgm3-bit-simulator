# Streamlab Alert Box 研究筆記

<font size=2>written by [門特魯 (zatd39)](https://www.plurk.com/zatd39)</font> 

## 研究來由
  
2020/06/18 剛換日，一樣和平的彩學聊天室。  
鴉片與史考在討論小奇點丟注音的斷點問題，  
此時里斯丟出了兩段Code，  
在旁圍觀的我試用後驚為天人，  
於是乎，三天後  

[**小奇點斷句模擬器**](https://m3ntru.github.io/tgm3-bit-simulator/)  

就誕生了。  
當初為什麼會想寫這個，我忘了，  
東西都寫出來了，還是希望能把功能做到最完善。  
但礙於作者我本人的定性不足，進度緩慢。  
有幸最近向某位友人(´･ω･`)借用了該實況台的Alert Box進行測試驗證，   
總算是研究出了個大概，在這裡做點分享。  

---

## Alert Box運作流程

<font size=5>**軍火製作說明請直接電梯向下前往斷句 & 發音說明
配合斷句模擬器做使用效果更佳![tgm3amonBig]**</font>

``` 
這一部分是針對Alert Box對於Bits通知程式運作的流程說明，  
閱讀這部分可能需要一點程式概念，有興趣再看就好。  
``` 

先介紹我們實況中看見的通知。  
彩學與大多數實況主使用的通知為 ![streamlabs](https://cdn.streamlabs.com/static/imgs/logos/kevin-logo.svg) 提供的 **Alert Box**，  
streamlabs的Alert Box基本上可以包含所有實況相關的通知。  
(Follow、Sub、Host、Raid、Bits、Paypal Donate)  
``` 
PS: 以上所有通知基本上都是要排隊出現的。
PS2: 歐付寶斗內使用的是另一個Alert Box，這就是為什麼歐付寶可以阻止內鬼
``` 

而在Alert Box視窗中，[Alert.js](https://streamlabs.com/mixed/assets/widgets/js/alertbox.js) 這個檔案囊括了絕大部分通知演出的code，  
以下將開始依Bits通知演出的執行順序做說明。  
``` 
各段標題為原始碼參考連結。
``` 

### 1. [onDisplay](https://github.com/m3ntru/tgm3-bit-simulator/blob/master/src/example/onDisplay.js)  

Alert Box接收到Bits通知會進到這個function，  
首先做音量設定(line 6 - 11)，  
接著會將接收到的原始內容轉換成顯示用的格式與TTS用的字串(line 12 - 42)，  
如下方範例：  
- 原始  
>cheer87 骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯 tgm3AMON  

- 顯示用  
>![bit1]87 骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯 ![tgm3amon]  

- TTS (Text-to-Speech)  
>骯骯骯骯骯骯骯骯骯骯骯骯骯骯骯 tgm3AMON  

```c
有時候文字內容很長且cheer放在後面時cheer會念出來，
這個算是 Alert Box 的Bug，這裡舉個例子。

今天有一個原始內容如下：
"cheer87 骯ㄤ骯ㄤ骯ㄤ(中間略)骯ㄤ骯ㄤ骯ㄤ tgm3cheer87"，總長度500。

運作到 line 18 這裡，由於總長度大於300，
所以作為顯示用的 u 會等於 "cheer87 骯ㄤ(中間略)骯ㄤ..." ，
長度296之後的字元會全部省略變為 "..."。

運作到下面的正規表示式(RegEx)會把所有cheer抓出來，但是是用 u 去抓，
所以他只會找到 "cheer87" 而找不到 "tgm3cheer87" ，
以致於後面要處理TTS用的字串 l 時，只會把 "cheer87" 移除，"tgm3cheer87" 就留下來了。
```

取得字串後，首先撥放Bits音效 (彩學的Bits通知沒有音效)，  
接著進入
```javascript=61
this.playTTS(l, n, c)
``` 
繼續發音流程。  

### 2. [playTTS](https://github.com/m3ntru/tgm3-bit-simulator/blob/master/src/example/playTTS.js)  

首先看到重點：  
```javascript=10
switch (e.ttsSecurity) {
    case 1:
        a.maxDuration = 16500;
        break;
    case 2:
        a.maxDuration = 12750;
        break;
    case 3:
        a.maxDuration = 9375
}
``` 
**maxDuration**  
決定了到底會不會唸出來的長度(單位為 ms)，  
只要跟Google TTS拿到的音檔超出這個長度，  
後續到```playSounds()```做播放時，就會直接不撥放。  

**ttsSecurity**   
為streamlabs後臺設定的洗頻防護(Spam Security)等級，  
同時也影響了maxDuration的長度。  
目前實測彩學應該是設在等級一，所以為 **16.5** 秒  

---

接著是將字串內的網址與前後空格移除後，  
將結果丟入```getSpeakUrl()```來取得TTS語音檔連結。  
取得連結後，將得到的連結放入佇列中，  
呼叫```playSounds()```播放

```javascript=20
t = t.replace(/((?:https?|ftp):\/\/[\n\S]+)|(<([^>]+)>)+/gi, "").trim(), Mo && Mo.hasVoiceId(o) ? Mo.getSpeakUrl(t, o).then((function(t) {
	a.url = t, r.sounds.push(a), r.playSounds()
})) : Bo.getSpeakUrl(t, o).then((function(t) {
	var e, n = _i(t);
	try {
		for (n.s(); !(e = n.n()).done;) {
			var o = e.value,
				s = Object(i.cloneDeep)(a);
			s.url = o, r.sounds.push(s)
		}
	} catch (t) {
		n.e(t)
	} finally {
		n.f()
	}
	r.playSounds()
}))

```

### 3. [getSpeakUrl](https://github.com/m3ntru/tgm3-bit-simulator/blob/master/src/example/getSpeakUrl.js)  

里斯當初丟出的Code之一。  
首先將整個字串、作為分隔的標點符號、每個斷句的最大長度丟進斷句  function```splitTextV1()```。  
```javascript=17
var a, s = No(n.splitTextV1(t, [".", "!", "?", ":", ";", ",", " "], 90));
```
會得到斷句後的結果，輸出為陣列。  
接著將得到的斷句各個接上Google TTS的Http GET Method ，  
回傳到```playTTS()```。  
```javascript=18
try {
    for (s.s(); !(a = s.n()).done;) {
        var c = a.value;
        i.push("http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=".concat(c.length, "&client=tw-ob&q=").concat(encodeURIComponent(c), "&tl=").concat(e))
    }
}
```

```
PS: Google TTS沒辦法直接在瀏覽器直接用ajax拿到音檔，
會有CORS (Cross-Origin Resource Sharing 跨域資源存取) 的問題。
為了解決這個問題，斷句模擬器我架了個代理的API來拿檔案。
PS2: 玩弄Google TTS的時候，不要短時間太多次。
不然就會像我一樣，我看這個畫面已經3 4個月了，那個機器人驗證根本沒用= =
```
![= =](\src\example\google.png)  

### 4. [splitTextV1](https://github.com/m3ntru/tgm3-bit-simulator/blob/master/src/example/splitTextV1.js)  

里斯當初丟出的Code之一，斷句模擬器的核心。
功能就是將字串以輸入的條件斷句，簡單明瞭，
解釋這段Code的運作過於花時間，大家看看就好，
請直接移駕下方斷句規則。

---

## 詳解斷句的規則 & 運用  

### 1. 斷句前的處理  

上面的運作流程有提到，  
在斷句之前，原始輸入的訊息會先被做處理。  

首先在聊天室輸入Bits訊息後送出，會先做第一次處理才會送進Alert Box  
**把連續的半形空格取代為一個半形空格**。  

以下是範例：  
- 處理前  
```
cheer87 骯 骯骯   骯骯骯 cheer87 cheer87         骯骯骯骯骯
```
- 處理後  
```
cheer87 骯 骯骯 骯骯骯 cheer87 cheer87 骯骯骯骯骯
```

進入Alert Box後，會把所有Bits的觸發字串(cheer)移除。  
這裡注意幾點，  
  
(1) **字串長度超過300字元時，建議不要將cheer放在後面。**  
會有沒移除到而被唸出來的情形，  
詳細原因在上面流程 ```1. onDisplay```有說明。  
  
(2) **移除cheer後，只會把頭尾的空格去除**，所以cheer放在中間時，空格會留著且不會合併成一個，可能會間接影響到斷句。  

**結論就是cheer放前面一定穩。**

以下是範例： 
- 處理前  
```
cheer87 骯 骯骯 骯骯骯 cheer87 cheer87 骯骯骯骯骯
```
- 處理後  
```
骯 骯骯 骯骯骯   骯骯骯骯骯
```

這裡處理後的字串，將會開始進行斷句。  

### 2. 斷句的規則  

斷句function有兩個參數，**分隔字元(標點符號) E** 及 **斷句長度 N**。  

下圖為流程圖：  

![Flow](\src\example\flow.png)  

streamlabs Alert Box 的分隔字元及斷句長度是寫死的，  
分別為：  

```javascript
E = [".", "!", "?", ":", ";", ",", " "]  //分隔字元
N = 90 //斷句長度
```
``` 
半形全形是不同的字元。
``` 

以下直接拿例子來做說明：  

><font size=2>cheer87 臣路言：彩學闖關未半，而中道崩殂;今天下三八，荷包疲敝，此誠危急存亡之秋也.然整骨之臣，不懈于轟；大門之士，忘身于摔者：蓋追老路之殊遇，欲報之于彩學也。誠宜開張聖聽，以光老路遺德，恢宏觀眾之氣；不宜妄自菲薄，都不洗澡，以塞握手之路也.呸頗、歐付，俱為一體，陟尬臧嘴，不宜異同。若有作死犯蠢，及為賀尬者，宜付莫得，論其刑賞，以昭彩學懶覺之理，不宜偏私，使內外異法也。</font>  

<font size=1>(出路表 by Append?)</font>  

移除cheer後，總長度為182字元。  

---

首先取出前90個字元。  
    
><font size=2>臣路言：彩學闖關未半，而中道崩殂<b><font color=#FF0000>;</font></b>今天下三八，荷包疲敝，此誠危急存亡之秋也<b><font color=#FF0000>.</font></b>然整骨之臣，不懈于轟；大門之士，忘身于摔者：蓋追老路之殊遇，欲報之于彩學也。誠宜開張聖聽，以光老路遺德， </font>  

　　
  
我們可以看到裡面有兩個分隔字元 <b><font color=#FF0000>;</font></b> 與 <b><font color=#FF0000>.</font></b>，  
根據流程圖，我們於後方的 <b><font color=#FF0000>.</font></b> 將字串分開。  

><font size=2>(1)臣路言：彩學闖關未半，而中道崩殂;今天下三八，荷包疲敝，此誠危急存亡之秋也.  
(2)然整骨之臣，不懈于轟；大門之士，忘身于摔者：蓋追老路之殊遇，欲報之于彩學也。誠宜開張聖聽，以光老路遺德，</font>  

　　　
  
 將 (1) 存入陣列，(2) 接回後續內容。  
 
 ><font size=2>[
 >"臣路言：彩學闖關未半，而中道崩殂;今天下三八，荷包疲敝，此誠危急存亡之秋也."
 >]</font>  


><font size=2>然整骨之臣，不懈于轟；大門之士，忘身于摔者：蓋追老路之殊遇，欲報之于彩學也。誠宜開張聖聽，以光老路遺德，恢宏觀眾之氣；不宜妄自菲薄，都不洗澡，以塞握手之路也.呸頗、歐付，俱為一體，陟尬臧嘴，不宜異同。若有作死犯蠢，及為賀尬者，宜付莫得，論其刑賞，以昭彩學懶覺之理，不宜偏私，使內外異法也。</font>  

---

再取出前90個字元。  
    
><font size=2>然整骨之臣，不懈于轟；大門之士，忘身于摔者：蓋追老路之殊遇，欲報之于彩學也。誠宜開張聖聽，以光老路遺德，恢宏觀眾之氣；不宜妄自菲薄，都不洗澡，以塞握手之路也<b><font color=#FF0000>.</font></b>呸頗、歐付，俱為一體，</font>  

　　
  
裡面有分隔字元 <b><font color=#FF0000>.</font></b>，  
根據流程圖，於 <b><font color=#FF0000>.</font></b> 將字串分開。  

><font size=2>(1)然整骨之臣，不懈于轟；大門之士，忘身于摔者：蓋追老路之殊遇，欲報之于彩學也。誠宜開張聖聽，以光老路遺德，恢宏觀眾之氣；不宜妄自菲薄，都不洗澡，以塞握手之路也.  
(2)呸頗、歐付，俱為一體，</font>  

　　　
  
 將 (1) 存入陣列，(2) 接回後續內容  
 
><font size=2>[
"臣路言：彩學闖關未半，而中道崩殂;今天下三八，荷包疲敝，此誠危急存亡之秋也." , 
>"然整骨之臣，不懈于轟；大門之士，忘身于摔者：蓋追老路之殊遇，欲報之于彩學也。誠宜開張聖聽，以光老路遺德，恢宏觀眾之氣；不宜妄自菲薄，都不洗澡，以塞握手之路也."
>]</font>  


><font size=2>呸頗、歐付，俱為一體，陟尬臧嘴，不宜異同。若有作死犯蠢，及為賀尬者，宜付莫得，論其刑賞，以昭彩學懶覺之理，不宜偏私，使內外異法也。</font>  

---

剩餘的內容以不足90個字元，  

><font size=2>呸頗、歐付，俱為一體，陟尬臧嘴，不宜異同。若有作死犯蠢，及為賀尬者，宜付莫得，論其刑賞，以昭彩學懶覺之理，不宜偏私，使內外異法也。</font>  


　　　
將剩餘的內容放入陣列，斷句完成。  

><font size=2>[
>"臣路言：彩學闖關未半，而中道崩殂;今天下三八，荷包疲敝，此誠危急存亡之秋也." , 
>"然整骨之臣，不懈于轟；大門之士，忘身于摔者：蓋追老路之殊遇，欲報之于彩學也。誠宜開張聖聽，以光老路遺德，恢宏觀眾之氣；不宜妄自菲薄，都不洗澡，以塞握手之路也." , 
>"呸頗、歐付，俱為一體，陟尬臧嘴，不宜異同。若有作死犯蠢，及為賀尬者，宜付莫得，論其刑賞，以昭彩學懶覺之理，不宜偏私，使內外異法也。"
>]</font>  

 ![example1](src\example\split_1.png)
 

---

## 估狗小姐(Google TTS)到底怎麼念  

斷句斷完了，接著下一個環節，  
**估狗小姐到底會怎麼念？**  

### 1. 估狗小姐念不念？  

在上面運作流程的```2. playTTS```有提到，  
目前測出的結果，彩學Alert Box的洗頻防護(Spam Security)等級為1，  
代表每一句斷句的長度只要超過 **16.5秒**，那一句估狗小姐就不會幫你念。  
每個斷句之間會有大概 8/60 ~ 10/60 秒的間隔。  

以下拿兩個例子來做說明：  

**(1)**  

[![video1](src\example\video1.jpg)](https://www.youtube.com/embed/htapKVwgdww)

![example2](src\example\split_2.png)

<font size=1>(張大人追撞黑色高級車 by lory3324)</font>  
<font size=1>(影片左聲道為原clip，右聲道為比對用音檔)</font>  

總計六句，每一句都沒有超出16.5秒，全部都會唸出來。  

而每個斷句之間的空白時間，從影片中可以看到，  
估狗小姐產出的檔案在最後面本身就會夾帶一些空白，  
且每個斷句之間會有大概 8/60 ~ 10/60 秒的間隔。  

---

**(2)**  

[![video1](src\example\video2.jpg)](https://www.youtube.com/embed/2__4qet0r7E)

<font size=1>(影片左聲道為原clip，右聲道為比對用音檔)</font>  

![example3](src\example\split_3.png)

總計六句，第2.4.5句都超出16.5秒，所以不會唸出來(不撥放)。  
且每個斷句之間會有大概 8/60 ~ 10/60 秒的間隔。  

所以播放流程會是這樣：  


><font size=2>"骯包." (0.888s) ->   
>
>間隔1(0.13~0.16s) -> 骯骯骯...(0s) -> 間隔2(0.13~0.16s) ->  
>
>"骯包." (0.888s) ->  
>
>間隔3(0.13~0.16s) -> 骯骯骯...(0s) -> 間隔4(0.13~0.16s) -> 骯骯骯...(0s) -> 間隔5(0.13~0.16s) -> 
>
>"骯包" (0.864s)
>
></font>  

第一聲骯包與第二聲骯包之間會有大概2個間隔長度的無聲時間(0.26~0.32s)，  
第二聲骯包與第三聲骯包之間會有大概3個間隔長度的無聲時間(0.39~0.48s)。  

---

### 2. 估狗小姐怎麼念？  

這個部分，相信大家有在聊天室塞過的各位應該很熟了。  
彩學使用的TTS語言是 **Chinese (Simplified)**，  
也就是你直接使用google翻譯，  
**左邊格子使用中文** 跟 **右邊格子使用中文(簡體)** 的聆聽聽到的結果是一樣的，  
在這裡說明幾個容易出現的問題及技巧：  

#### **● 注音**  

一開始大家發現可以使用注音讓估狗小姐唸出超長的句子不會消音，  
原因是因為注音念一個字需要用到2~4個字元，  
所以一個斷句念超出16.5秒的機會很低，又有可以直接控制聲調的優點，簡單暴力。  

注音每個字由兩個部分組成，**[注音符號]**與**{聲調}**。 
>聲調的一聲可以是一個空格或是-，二三四輕聲就一樣用ˊˇˋ˙，沒有聲調就當一聲。

這裡以初心者塞包常會發生的情況做說明：

---

**(1) ㄤㄤㄤ**  

這連續三個ㄤ中間沒有任何聲調，所以他會視為[ㄤㄤㄤ]{一聲}，  
會變為一個字長度的無聲，骯不出來。  

**(2) 骯ㄤ骯ㄤ骯ㄤ**  

ㄤ後面接了一個不是注音符號也不是聲調的字元，所以會視為骯[ㄤ]{一聲}，骯得出來。  

**(3)ㄤ ㄤ ㄤ 或 ㄤ-ㄤ-ㄤ-**  

ㄤ後面接了一個空白或-，所以會視為[ㄤ]{一聲}[ㄤ]{一聲}[ㄤ]{一聲}，骯得出來。  

---  

了解上面的規則後，可以用來當技巧運用。  
像是常見的內鬼無聲字"ㄙㄟ"，  
"ㄙㄟㄙㄟㄙㄟㄙㄟㄙㄟ"  
全部連在一起，只會被視為一個字，所以產出的音檔就只有一個無聲字的長度。  
"ㄙㄟ ㄙㄟ ㄙㄟ ㄙㄟ ㄙㄟ "  
每個ㄙㄟ都有搭配到一個空格，所以產出的音檔就有五個無聲字的長度。  

```
PS: 由於空格也是斷句分隔字元，
所以使用空格的一聲字可能會對斷句造成影響，
建議一聲字改使用-以確保穩定。
```

#### **● 延遲咒文(無聲字) & 連續字**  

```
目前google念不出來的中文：瓰,㔫,鿌,鿀,鿊,龾,龳,甅,嗧,龫,龻 (待補充) (ghostermoma提供)
```
無聲字也是很常拿來控制延遲的手段之一，  
但使用上要注意，**某些音的字連續超過三個以上，可能只會念三次。**，  
骯骯包沒這個問題，但是像是呱呱包就會有這個問題，**無聲字也是其中之一**，  
哪些音的字會造成這個情形，就要自己測試看看，目前無跡可尋。  

簡單的解決方法有兩種：  

(1) 在每個字之間加上全形標點符號(全形標點符號也會有一點點停頓)：  

```
㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫，㔫  
```

(2) 使用同音的字做交錯：  

```
呱刮呱刮呱刮呱刮呱刮呱刮呱刮呱刮呱刮呱刮呱刮呱刮呱刮呱刮
```

#### **● Emoji**  

說到Emoji，大家朗朗上口的應該都是這句：  

>👲🐤ㄐ🕡，不🛀有🧓臭

但是Emoji是個可能只占1-3字元，但唸出來要花3-4秒的東西，  
很容易突破16.5秒的上限，請小心使用。  

 >💹，🖇， 🛻🔀，🔉，🔰，➿，🔡，🔯，⏳  <font size=1>(Append提供)</font> 
 >這邊10個Emoji加上標點符號共27字元，就長達26.464秒。  

## 結語

看到這裡，希望你已經成功了解軍火的製作方法與注意事項了，
也希望我寫的 [**小奇點斷句模擬器**](https://m3ntru.github.io/tgm3-bit-simulator/) 能幫助你製作軍火時能少一點麻煩。
說到底，如何做出有效果的軍火還是各憑本事，  
畢竟彩學與聊天室對軍火的反應才是做軍火的醍醐味。 

最後，不免俗的還是要來提醒各位：  

<font size=6>**所有你在彩學台做出的
訂閱，斗內，Bits 等等消費行為，
這些都是算是娛樂消費，
請遵循量力而為原則，
先讓自己有充裕的生活，再來塞包，
沒辦法的話，其他有辦法的觀眾會幫你塞![tgm3amonBig]。**</font>

## 特別感謝  

- 我們的最大苦主 吳彩學 [TetrisTheGRANDMAster3](https://www.twitch.tv/tetristhegrandmaster3/) 
- [ChRiS38c28](https://github.com/crs38c28) 提供本研究一切的起源 [Alert.js](https://streamlabs.com/mixed/assets/widgets/js/alertbox.js)  
- 啟發我進行研究的最大軍火商 [Append](https://www.twitch.tv/append)  
- 小奇點測試環境提供 [ICKID (´･ω･`)](https://www.twitch.tv/ickid)   
- 本文引用的資料原作者 [lory3324](https://www.twitch.tv/lory3324)、[ghostermoma](https://www.twitch.tv/ghostermoma)  
- 彩學台聊天室的所有塞包眾  

[tgm3amon]: https://static-cdn.jtvnw.net/emoticons/v1/78084/1.0  "tgm3amon"

[tgm3amonBig]: https://static-cdn.jtvnw.net/emoticons/v1/78084/2.0  "tgm3amonB"

[bit1]: https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.gif "bits1"