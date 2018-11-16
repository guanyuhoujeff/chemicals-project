import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service-service.service';

@Component({
  selector: 'app-online-file',
  templateUrl: './online-file.component.html',
  styleUrls: ['./online-file.component.css']
})
export class OnlineFileComponent implements OnInit {
  constructor(private chemicalsService: DataServiceService) {
    this.getFinishedOnlineFile();
  }
  finishedOnlineFile = { Marked_text: undefined,
    R1_count: undefined,
    R1_keyW_list: [],
    R1_tf: undefined,
    R21_count: undefined,
    R21_keyW_list: [],
    R21_tf: undefined,
    R22_count: undefined,
    R22_keyW_list: [],
    R22_tf: undefined,
    R23_count: undefined,
    R23_keyW_list: [],
    R23_tf: undefined,
    R24_count: undefined,
    R24_keyW_list: [],
    R24_tf: undefined,
    R31_count: undefined,
    R31_keyW_list: [],
    R31_tf: undefined,
    R32_count: undefined,
    R32_keyW_list: [],
    R32_tf: undefined,
    R33_count: undefined,
    R33_keyW_list: [],
    R33_tf: undefined,
    R34_count: undefined,
    R34_keyW_list: [],
    R34_tf: undefined,
   };
  R1checked;
  R2checked;
  R3checked;
  textareaContent = testContent;

  ngOnInit() {}

  submit() {
    this.chemicalsService
      .postHandleOnlineFileTopic()
      .subscribe(data => console.log('postHandleOnlineFileTopic '));
    this.chemicalsService
      .postHandleOnlineFileMonogo(this.textareaContent)
      .subscribe(data => console.log('postHandleOnlineFileMonogo  data', data));
  }

  getFinishedOnlineFile() {
    this.chemicalsService.getHandleOnlineFileTopic().subscribe(topic => {
      console.log('get Topic  ', topic);
      this.chemicalsService.getFinishedHandleOnlineFile().subscribe(data => {
        console.log('getHandleOnlineFileTopic  data', data);
        this.finishedOnlineFile = data[0];
      });
    });
  }

  cancel() {
    this.textareaContent = undefined;
  }
}

const testContent = `
桃園縣蘆竹鄉某公司爆炸事故
Accidental explosion at a certain company in Luzhu
Township, Taoyuan County
高彥博
台硝股份有限公司安管處
桃園縣葳竹鄉坑口村3鄰29-25號
一、摘要
成品一課技術員徐〇〇於當晚23時10餘分從蒸餾區走出時，發現環工課厭氧塔有反射的紅光且會飄動，該員當下覺得不對勁，
隨即走往承租地（包材倉）方向查看，發現包材倉庫中的棧板擺置區有起火，故立即跑回成品一課辦公室通知領班揚〇〇一起前往協助滅火；
但因就近的消防栓水壓不足，當現場人員重新從成品二課拉水袋前往試圖滅火時，因當時風速頗大，火勢已迅速擴大波及隔壁間的危險物品，
接著再波及毒化物儲存區、溶劑區、成品二課及成品倉庫。
關鍵詞：（1）危險物品、（2）毒化物、（3)溶劑區
Abstract
When Technician Hsu in finished product subsection 1 walked out of the
distillation area after 23:00? he discovered a flickering red light reflected from
the anaerobic tower in the environmental operations subsection. Feeling that
something was wrong, Hsu immediately walked in the direction of the leased
area (packaging material warehouse) to see what had happened, and discovered
that there was a fire in an area where pallets were stacked in the packaging
material warehouse. Hsu immediately ran back to the office of finished product
subsection 1 and notified shift supervisor Yang, who joined Hsu in an effort to
extinguish the fire. However, water pressure from the hydrant close to the fire
was insufficient, and by the time on-site personnel had dragged water bladders
from finished product subsection 2 in order to fight the fire, the wind was
blowing strongly, and the fire had spread to hazardous substances nearby. The
fire spread to the toxic chemical storage area, solvent area, finished product
subsection 2, and finished product warehouse.
Keywords: (1) hazardous materials, (2) toxic chemical substances, (3) solvent area
二、事故簡介
(一）災害事故發生基本資料
1.	廠商名稱：台硝股份有限公司桃園廠
2.	地址：桃園縣蘆竹鄉坑口村3鄰29-25號
3•發生時間：102.08.06 23 ： 09
4•傷亡人數：無人員傷亡
5.	氣象
依據中央氣象局當下最近的觀測站(新屋)資料
(1)	時間：102.08.06 2300
(2)	氣壓：1009.1 hpa
(3)	溫度：攝氏29.3度
(4)	相對溼度：85%
(5)	降水量：0 mm
6.	風向速
(1)	風速：3.1m/s
(2)	風向：西南(此為觀測站資料，實際風向仍以現場而定）
7.	事故場所及類型：
(1)	事故場所：毒化物儲存場所、溶劑儲槽區、成品二課、成品倉庫
(2)	事故類型：因包材區發生火災而波及到
8•事故未發生如之現場摘述_
各生產單位均有人員進行生產，唯火災發生點為包材區，約45〜60分鐘左右才會有人開堆高機進入載運包材。
9•受波及之毒化物：
(1)	鄰苯二甲酸二丁酿(Dibutylphthalate)...液態
A.	CasNo：84-74-2
B.	101年之運作量：52559公斤
C.	火災前1日儲存量：3240公斤
D.	燒毀量：3240公斤
(2)	環己炫>(Cyclohexane)…液態
A.	Cas No : 110-82-7
B.	101年之運作量：5115公斤
C.	火災前1日儲存量：310公斤
D.	燒毀量：310公斤
E.	儲存位置：毒化物儲存場所
(3)	甲基異丁酮(Methyl isobutyl ketone)…液態
A.	Cas No ： 108-10-1
B.	101年之運作量：31865公斤
C.	火災前1日儲存量：170公斤
D.	燒毀量：170公斤
E.	儲存位置：毒化物儲存場所
(4)	氣乙酸(Chloroacetic acid)..•固態
A.	Cas No ： 79-11-8
B.	101年之運作量：0公斤
C.	火災前1曰儲存量：1125公斤
D.	燒毀量：1125公斤
E.	儲存位置：毒化物儲存場所
10.	受波及之其他物質
(1)	異丙醇(Isopropyl alcoho 1)…液態
A.	Cas No : 67-63-0
B.	燒毀量：約250噸
C.	儲存位置：溶劑儲槽區
(2)	硝'化纖維素(Nitrocellulose)…固態
A.	Cas No ：9004-70-0
B.	燒毁量：約500噸
C.	儲存位置：成品倉庫
11.	未受波及之毒化物
(1)二氣甲烧(Dichloromethane)…液態
A. Cas No ：75-09-2
B.	101年之運作量：68.495公斤
C.	火災前1日儲存量：17.29公斤
D.	火災後清點量：17.29公斤
E.	儲存位置：研發室
(2)	甲基第三丁基醚(Methyl tert-butyl ether)...液態
A.	Cas No : 1634-04-4
B.	101年之運作量：1200公斤
C.	火災前1日儲存量：2700公斤
D.	火災後清點量：2700公斤
E.	儲存位置：純化區
(3)	鄰苯二甲酸二(2•乙基己醋)酯(1,2-Benzenedicarboxylic acid, bis
(2-ethylhexyl)ester )液態
A. Cas No : 117-81-7
尚未購入
12.	災損規模
(1)	毒化物儲存場所全部燒毀，面積約7坪，儲放於内之毒化物鄰苯二甲酸二丁酯(液態）、環己烷(液態）、甲基異丁酮(液態）、氣乙酸(固態）皆全數燒毀。
(2)	溶劑儲槽區全數燒毀，面積約543坪。
(3)	成品二課製程區全數燒毀，面積約65坪。
(4)	成品倉庫全數燒毁，面積約615坪。
(二）事故照片
三、應變過程
(一）	應變單位
1.	廠方部分：立即啟動緊急應變系統
現場作業人員於巡檢時發現包材區有火災，立即通報各單位滅火班及當日值班主管范〇〇，但因包材區皆屬易燃物，火勢一下擴大，故立即啟動緊急應變系統。
所有主管約半小時後陸續到廠，毒化物專責人員高〇〇先將所有員工集合在巷口7-11點名，確認人員均無受傷狀況後隨即通報北區環境事故技術小組及桃園縣環保局，並向消防局說明火場内之相關位置。
警衛組長徐〇〇、安全員丁〇〇及協調員林〇〇協助人車管制；
電力組范〇〇啟動發電機，協助未被波及之單位做收班動作，以免災情擴大；救護組童〇〇於門口待命；公關事務楊〇〇協助提供相關物質安全資料及運作日報表；緊急救災小組李〇〇、張◦〇協助北區環境事故技術小組由廠區後方觀看毒化物儲存區（當下已是火海）及週遭監測。
工廠應變指揮官林〇〇董事長、事故指揮官徐〇〇經理、搶救組胡〇〇副理及專責人員高〇〇課長負責協助消防局相關救災事宜。
2.	外部支援單位
此災害係為包材區發生火災而波及到週遭倉庫(包含毒化物儲存區)及儲槽，並非毒化物洩露而引起災變，加上現場於短時間内即成火海，故先行通知應變器材商及廢棄物清除商待命。
(二）	應變分工
由毒化物專責人員高〇〇明確告知消防隊、北區環境事故技術小組及桃園縣環保局環衛小組其毒化物儲存位置及現場儲存量，所有廠區幹部皆依其任務職掌進行應變相關工作。
(三）	應變裝備
包材倉庫發生火災時，因倉庫内皆屬易燃物，故現場瞬間成為火海，毒化物儲存倉庫因而被潑及到，當下所有毒化物已被燒毀。廠區人員、消防隊員僅能在週界佈水線，無法靠近；北區環境事故技術小組、環保局人員亦無法靠近，僅能在週遭監測。
桃園縣政府環保局配合環保署環境事故技術小組人員到達現場後，立即於周遭鄰近敏感區域以FTIR(傅立葉轉換紅外線光譜儀)實施量測。7曰凌晨3點39分，監測值為異丙醇4.5 ppm (8小時平均容許濃度值為400ppm)。清晨4點29分監測值，異丙醇已降至0.4ppm。
空氣中未量測出毒性化學物質濃度值，毋須進行人員疏散。
環保局在爆炸事故現場確定安全無虞後，立即進行毒性化學物質清點，台硝公司現場存有毒性化學物質：甲基異丁酮(170公斤）、氯乙酸(1125公斤）、環己烷(310公斤）
  、甲基第三丁基醚(2700公斤）、二氯甲烷(17.29公斤)及鄰苯二甲酸二丁酯(3240公斤）。其中甲基異丁酮、氣乙酸、環己烷及鄰苯二甲酸二丁酯，
    皆已燃燒殆盡。其餘，甲基第三丁基醚、二氯甲烷，並未受到波及。
四、	災因分析
(一）	事件時間：102.08.06 23時09分
(二）	事件地點：包材倉庫
(三）	災害類型：火災
(四）	媒介物：不明物質
(五）	罹災情形：未造成人員傷亡
(六）	事件摘要
成品一課技術員徐〇〇於當晚23時10餘分從蒸餾走出時，發現環工課厭氧塔有反射的紅光且會飄動，該員當下覺得不對勁，隨即走往承租地(包材倉庫)方向查看，
發現包材倉庫中的棧板擺置區有起火，故立即跑回成品一課辦公室通知領班楊〇〇一起前往協助滅火；但因就近的消防栓水壓不足，當現場人員重新從成品二課拉水袋前往試圖滅火時，
因當時風速頗大，火勢已擴大波及隔壁間的危險物品，接著再波及溶劑區、成品二課及成品倉庫。
(七）	直接原因
包材倉庫内不明物質起火導致毒化物儲存區、溶劑區、成品二課及成品倉庫發生火災爆炸。
(八）	間接原因：
不安全狀況：開放式包材倉庫緊鄰危險品暫存倉庫，且非為耐燃或防火材質隔間。
(九）	基本原因：
包材倉庫擺放非包材之物質。
五、	災後處理與復原
(一）廢棄物產生源
廠内於102年8月6日夜間23時10餘分因包材區發生火災，因而波及到毒化物儲存區、溶劑區、成品二課及成品倉庫之磚造廠房至不堪使用。
工廠地址：桃園縣蘆竹鄉坑口村3鄰29-25號
廢棄物產生地址：桃園縣蘆竹鄉坑口村3鄰29-25號
廢棄物產生地號：桃園縣蘆竹鄉坑子口段海湖小段227地號
(二）	廢棄物種類（名稱及代碼）
1.	生活垃圾（D-1801）
2.	廢塑膠混合物（D-0299）
3.	土木或建築廢棄物混合物（D-0599）
4.	廢鐵（R-1301)
4.	非有害有機廢液或廢溶劑(消防廢水）（D-1504)
5.	其他前述化學物質混合物或廢棄容器「毒化物空桶」（B-0399)
(三）	廢棄物特性
1.毒性有害事業廢棄物（B-0399)
2•因全數燒毀，已無法歸類那一容器是裝何種毒化物，且確定皆為空桶，故統一歸納為毒性有害事業廢棄物（B-0399)。
3.	燒燦之毒化物如下：
(1)	鄰苯二甲酸二丁酯（液體）燒毁3240公斤—17桶
(2)	環己烷（液體）燒毀310公斤—2桶
(3)	甲基異丁酮（液體）燒毁170公斤—2桶
(4)	氯乙酸（固體）燒毀1125公斤—45包
(5)	—般事業廢棄物「消防廢水」（D-l599)
(四）	廢棄物重量（公噸）
消防廢水(D-1599): 1M3 Tote#50個...約50公噸
毒化物空桶（B-0399) : 53 Gal鐵桶#21只（18.46kg/只）...約0. 5噸
生活垃圾：約10噸
廢塑膠混合物：約19噸
土木或建築廢棄物混合物：約80噸
上述廢棄物實際重量仍以過磅重量為準。

消防廢水盛裝容器為密閉容器，與毒化物空桶#21只皆存放於廠内原棉倉庫間之室内走道，前後有鐵捲門管制，無碰撞、污染之虞。
其於廢棄物皆存放於火災現場，不定時以水喷灑，以減少揚塵。






廢棄物代碼	D-1599	B-0399
清除商	全勝鴻實業限公司	展陽環保科技有限公司
管制編號	H46A8511	H42A9143
處理廠	样祐資源再生股份有限公司	榮民工程股份有限公司大發事業廢棄物處理廠
管制編號	L9101720	S2009990
處理方式	Z04熱處理	Z05焚化











(七）廢棄物清除時之污染防制措施
1.	拆除：為防止建築物在敲毀時產生揚塵，故在施工時將以水線全程喷灑。
2.	清除：
(1)	清運過程由清除廠商派合格之專業人員隨車照料，如發現廢棄物起火燃燒，清運人員立即戴上防毒口罩，並用滅火器進行滅火；假使火勢無法控制，則聯繫消防單位協助處理；若有人員受傷亦立即送醫。
(2)	清運車輛發生事故時，由司機立即通知警方處理；若有人員受傷亦立即醫；假使車輛因事故而翻覆，清運人員則依主管機關指示辦理，並做好污染清除及善後處理工作。
(3)	隨時查詢氣象資料，掌控清運時間，避免清運途中遇上惡劣氣候。

六、結語與建議
(一）	防止災害對策
1.	落實物料分類隔離。
2.	硝化棉儲存倉庫外移。
3.	室外溶劑儲槽區之設置依消防法規規定之。
4.	溶劑儲槽及相關管路皆為金屬材質，並設有除靜電之接地裝置，法蘭與法蘭間亦設有跨接導靜電裝置。
5.	溶劑儲槽區域設置水幕，每座儲槽皆設有溫度感知器及獨立泡洙注入系統。

`;
