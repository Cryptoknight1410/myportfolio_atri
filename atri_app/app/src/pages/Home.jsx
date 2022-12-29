import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useNav_barCb, useNav_flexCb, useDiv3Cb, useFlex2Cb, useDiv2Cb, useFlex3Cb, usedotflexCb, useIntroductionCb, useFlex5Cb, useDiv5Cb, useFlex6Cb, useDiv7Cb, useDiv6Cb, useTrusted_ByCb, useDiv9Cb, useDiv10Cb, useFlex7Cb, useDiv11Cb, useFlex8Cb, useServicesCb, useDiv13Cb, useTagdivCb, useFlex11Cb, useDiv15Cb, useDiv16Cb, useFlex12Cb, useDiv20Cb, useFlex33Cb, useCard1Cb, useImageCb, useDescriptionCardCb, useDiv21Cb, useFlex13Cb, useFlex16Cb, useFlex17Cb, useDiv33Cb, useDiv31Cb, useDiv30Cb, useFlex24Cb, useFlex25Cb, useFlex26Cb, useDiv32Cb, useDiv46Cb, useDiv44Cb, useDiv43Cb, useFlex34Cb, useFlex35Cb, useFlex36Cb, useDiv45Cb, useProjectsCb, useDiv80Cb, useFlex60Cb, useDiv79Cb, useProjectmanager_whiteCb, useDiv84Cb, useFlex61Cb, useDiv85Cb, useFlex62Cb, useProject1Cb, useDiv88Cb, useFlex63Cb, useDiv91Cb, useDiv89Cb, useDiv95Cb, useDiv93Cb, useDiv94Cb, useFlex64Cb, useDiv92Cb, useDiv123Cb, useDiv121Cb, useFlex71Cb, useDiv120Cb, useDiv122Cb, useDiv127Cb, useDiv125Cb, useFlex72Cb, useDiv124Cb, useDiv126Cb, useDiv135Cb, useDiv133Cb, useDiv134Cb, useFlex74Cb, useDiv132Cb, useProjectmanager_blackCb, useFlex75Cb, useBlogsCb, useFlex76Cb, useBloagsdivCb, useDiv139Cb, useDiv138Cb, useFlex77Cb, useblog_card1Cb, useFlex78Cb, useDiv142Cb, useDiv157Cb, useDiv156Cb, useFlex85Cb, useDiv159Cb, useDiv158Cb, useFlex86Cb, useDiv161Cb, useDiv160Cb, useFlex87Cb, useDiv163Cb, useDiv162Cb, useFlex88Cb, useProductBarCb, useFlex84Cb, useDiv154Cb, useDiv155Cb, useProductImages1Cb, useDiv165Cb, useFlex89Cb, useDiv177Cb, useFlex96Cb, useDiv181Cb, useFlex95Cb, useDiv178Cb, useDiv179Cb, useDiv182Cb, useDiv183Cb, useExperienceCb, useDiv197Cb, useFlex101Cb, useDiv198Cb, useFlex97Cb, useEducationCb, useFlex98Cb, useDiv188Cb, useFlex99Cb, useDiv190Cb, useDiv191Cb, useuniversity_cardCb, useDiv189Cb, useFlex103Cb, useFlex104Cb, useFlex105Cb, useDiv203Cb, useFlex115Cb, useFlex113Cb, useDiv202Cb, useFlex114Cb, useDiv205Cb, useFlex118Cb, useFlex116Cb, useDiv204Cb, useFlex117Cb, useWork_ExperienceCb, useDiv214Cb, useDiv210Cb, useFlex124Cb, useFlex130Cb, useDiv216Cb, useFlex131Cb, useFlex128Cb, useFlex123Cb, useFlex129Cb, useDiv211Cb, useFlex125Cb, useDiv206Cb, useDiv207Cb, useDiv219Cb, useDiv218Cb, useFlex136Cb, useFlex135Cb, useFlex134Cb, useFlex133Cb, useFlex132Cb, useDiv217Cb, useDiv222Cb, useDiv221Cb, useFlex141Cb, useFlex140Cb, useFlex139Cb, useFlex138Cb, useFlex137Cb, useDiv220Cb, useTestimonialsCb, useDiv224Cb, useDiv225Cb, useFlex149Cb, useDiv243Cb, useFlex142Cb, useDiv226Cb, useDiv227Cb, useFlex143Cb, useDiv228Cb, useDiv229Cb, useFlex144Cb, useDiv230Cb, useDiv233Cb, useDiv234Cb, useDiv231Cb, useFlex145Cb, useDiv232Cb, useFAQsCb, useDiv245Cb, useDiv255Cb, useDiv254Cb, useDiv246Cb, useFlex150Cb, useDiv247Cb, useFlex151Cb, useleftcolumnCb, useDiv250Cb, usefaqCard1Cb, useFlex156Cb, useDiv283Cb, useFlex175Cb, useDiv285Cb, useFlex177Cb, useDiv284Cb, useFlex176Cb, useDiv291Cb, useDiv290Cb, useDiv287Cb, useFlex179Cb, useDiv288Cb, useDiv286Cb, useFlex178Cb, useFlex180Cb, useDiv289Cb, useFlex181Cb, usecall_meCb, useDiv279Cb, useaboutCb, useDiv274Cb, useFlex166Cb, useDiv275Cb, useFlex167Cb, useDiv277Cb, useDiv280Cb, useDiv281Cb, useDiv278Cb, useFlex168Cb, useFlex173Cb, useFlex174Cb, usefooterCb, useDiv282Cb, useAboutCb, useServiceCb, useProjectCb, useBlogCb, useBook_a_callCb, useImage1Cb, usePortfolioCreatorCb, useDotImageCb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useBook_a_calCb, useTextBox10Cb, useImage4Cb, useMy_imageCb, useTextBox11Cb, useImage9Cb, useImage10Cb, useImage11Cb, useImage12Cb, useTextBox12Cb, useTextBox13Cb, useImage17Cb, useTextBox16Cb, useTextBox17Cb, useTextBox19Cb, useTextBox20Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox51Cb, useTextBox52Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useTextBox48Cb, useTextBox49Cb, useTextBox50Cb, useImage20Cb, useTextBox75Cb, useTextBox76Cb, useTextBox69Cb, useTextBox70Cb, useTextBox71Cb, useTextBox72Cb, useTextBox73Cb, useTextBox74Cb, useImage23Cb, useview_projectsCb, useprojectsCb, useTextBox128Cb, useTextBox130Cb, useTextBox134Cb, useTextBox135Cb, useImage31Cb, useTextBox136Cb, useImage30Cb, useImage33Cb, useTextBox138Cb, useTextBox139Cb, useTextBox137Cb, useImage32Cb, useTextBox159Cb, useTextBox160Cb, useImage46Cb, useTextBox158Cb, useImage47Cb, useTextBox162Cb, useTextBox163Cb, useImage48Cb, useTextBox161Cb, useImage49Cb, useImage53Cb, useTextBox168Cb, useTextBox169Cb, useTextBox167Cb, useImage52Cb, useButton4Cb, useButton5Cb, useTextBox171Cb, useTextBox170Cb, useTextBox172Cb, useImage54Cb, useTextBox173Cb, useTextBox175Cb, useTextBox176Cb, useTextBox179Cb, useTextBox174Cb, useImage56Cb, useTextBox178Cb, useTextBox218Cb, useTextBox213Cb, useImage62Cb, useTextBox214Cb, useTextBox215Cb, useTextBox216Cb, useTextBox217Cb, useTextBox224Cb, useTextBox219Cb, useImage63Cb, useTextBox220Cb, useTextBox221Cb, useTextBox222Cb, useTextBox223Cb, useTextBox230Cb, useTextBox225Cb, useImage64Cb, useTextBox226Cb, useTextBox227Cb, useTextBox228Cb, useTextBox229Cb, useTextBox236Cb, useTextBox231Cb, useImage65Cb, useTextBox232Cb, useTextBox233Cb, useTextBox234Cb, useTextBox235Cb, useTextBox210Cb, useTextBox211Cb, useTextBox212Cb, useImage74Cb, useImage75Cb, useImage76Cb, useImage77Cb, useImage78Cb, useTextBox238Cb, useTextBox243Cb, useTextBox239Cb, useImage83Cb, useTextBox240Cb, useTextBox241Cb, useTextBox242Cb, useTextBox259Cb, useTextBox258Cb, useTextBox255Cb, useTextBox256Cb, useImage87Cb, useTextBox257Cb, useTextBox264Cb, useTextBox263Cb, useTextBox260Cb, useTextBox261Cb, useImage88Cb, useTextBox262Cb, useTextBox280Cb, useImage92Cb, useImage94Cb, useTextBox274Cb, useTextBox277Cb, useTextBox272Cb, useTextBox273Cb, useTextBox265Cb, useImage89Cb, useTextBox286Cb, useImage96Cb, useTextBox285Cb, useTextBox284Cb, useTextBox282Cb, useTextBox283Cb, useImage95Cb, useTextBox291Cb, useImage98Cb, useTextBox290Cb, useTextBox289Cb, useTextBox287Cb, useTextBox288Cb, useImage97Cb, useTextBox292Cb, useTextBox293Cb, useImage99Cb, useImage100Cb, useTextBox295Cb, useTextBox296Cb, useButton6Cb, useButton7Cb, useTextBox294Cb, useTextBox302Cb, useTextBox303Cb, useTextBox305Cb, useTextBox304Cb, useImage104Cb, useTextBox352Cb, useImage116Cb, useTextBox351Cb, useTextBox356Cb, useImage118Cb, useTextBox355Cb, useTextBox354Cb, useImage117Cb, useTextBox353Cb, useTextBox362Cb, useTextBox358Cb, useImage120Cb, useTextBox363Cb, useTextBox359Cb, useTextBox357Cb, useImage119Cb, useTextBox360Cb, useImage121Cb, useTextBox364Cb, useImage122Cb, useTextBox361Cb, useTextBox324Cb, useTextBox325Cb, useTextBox329Cb, useTextBox328Cb, useImage114Cb, useImage115Cb, useTextBox331Cb, useTextBox332Cb, useTextBox335Cb, useTextBox336Cb, useTextBox343Cb, useTextBox344Cb, useTextBox345Cb, useTextBox346Cb, useTextBox347Cb, useTextBox348Cb, useTextBox350Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Nav_barProps = useStore((state)=>state["Home"]["Nav_bar"]);
const Nav_barIoProps = useIoStore((state)=>state["Home"]["Nav_bar"]);
const Nav_barCb = useNav_barCb()
const Nav_flexProps = useStore((state)=>state["Home"]["Nav_flex"]);
const Nav_flexIoProps = useIoStore((state)=>state["Home"]["Nav_flex"]);
const Nav_flexCb = useNav_flexCb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Div2Props = useStore((state)=>state["Home"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Home"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const dotflexProps = useStore((state)=>state["Home"]["dotflex"]);
const dotflexIoProps = useIoStore((state)=>state["Home"]["dotflex"]);
const dotflexCb = usedotflexCb()
const IntroductionProps = useStore((state)=>state["Home"]["Introduction"]);
const IntroductionIoProps = useIoStore((state)=>state["Home"]["Introduction"]);
const IntroductionCb = useIntroductionCb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Trusted_ByProps = useStore((state)=>state["Home"]["Trusted_By"]);
const Trusted_ByIoProps = useIoStore((state)=>state["Home"]["Trusted_By"]);
const Trusted_ByCb = useTrusted_ByCb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const TagdivProps = useStore((state)=>state["Home"]["Tagdiv"]);
const TagdivIoProps = useIoStore((state)=>state["Home"]["Tagdiv"]);
const TagdivCb = useTagdivCb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div20Props = useStore((state)=>state["Home"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Home"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Card1Props = useStore((state)=>state["Home"]["Card1"]);
const Card1IoProps = useIoStore((state)=>state["Home"]["Card1"]);
const Card1Cb = useCard1Cb()
const ImageProps = useStore((state)=>state["Home"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Home"]["Image"]);
const ImageCb = useImageCb()
const DescriptionCardProps = useStore((state)=>state["Home"]["DescriptionCard"]);
const DescriptionCardIoProps = useIoStore((state)=>state["Home"]["DescriptionCard"]);
const DescriptionCardCb = useDescriptionCardCb()
const Div21Props = useStore((state)=>state["Home"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Home"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Div33Props = useStore((state)=>state["Home"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["Home"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Div31Props = useStore((state)=>state["Home"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Home"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Div32Props = useStore((state)=>state["Home"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Home"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Div46Props = useStore((state)=>state["Home"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["Home"]["Div46"]);
const Div46Cb = useDiv46Cb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Div45Props = useStore((state)=>state["Home"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home"]["Div45"]);
const Div45Cb = useDiv45Cb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const Div80Props = useStore((state)=>state["Home"]["Div80"]);
const Div80IoProps = useIoStore((state)=>state["Home"]["Div80"]);
const Div80Cb = useDiv80Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Div79Props = useStore((state)=>state["Home"]["Div79"]);
const Div79IoProps = useIoStore((state)=>state["Home"]["Div79"]);
const Div79Cb = useDiv79Cb()
const Projectmanager_whiteProps = useStore((state)=>state["Home"]["Projectmanager_white"]);
const Projectmanager_whiteIoProps = useIoStore((state)=>state["Home"]["Projectmanager_white"]);
const Projectmanager_whiteCb = useProjectmanager_whiteCb()
const Div84Props = useStore((state)=>state["Home"]["Div84"]);
const Div84IoProps = useIoStore((state)=>state["Home"]["Div84"]);
const Div84Cb = useDiv84Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Div85Props = useStore((state)=>state["Home"]["Div85"]);
const Div85IoProps = useIoStore((state)=>state["Home"]["Div85"]);
const Div85Cb = useDiv85Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Project1Props = useStore((state)=>state["Home"]["Project1"]);
const Project1IoProps = useIoStore((state)=>state["Home"]["Project1"]);
const Project1Cb = useProject1Cb()
const Div88Props = useStore((state)=>state["Home"]["Div88"]);
const Div88IoProps = useIoStore((state)=>state["Home"]["Div88"]);
const Div88Cb = useDiv88Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Div91Props = useStore((state)=>state["Home"]["Div91"]);
const Div91IoProps = useIoStore((state)=>state["Home"]["Div91"]);
const Div91Cb = useDiv91Cb()
const Div89Props = useStore((state)=>state["Home"]["Div89"]);
const Div89IoProps = useIoStore((state)=>state["Home"]["Div89"]);
const Div89Cb = useDiv89Cb()
const Div95Props = useStore((state)=>state["Home"]["Div95"]);
const Div95IoProps = useIoStore((state)=>state["Home"]["Div95"]);
const Div95Cb = useDiv95Cb()
const Div93Props = useStore((state)=>state["Home"]["Div93"]);
const Div93IoProps = useIoStore((state)=>state["Home"]["Div93"]);
const Div93Cb = useDiv93Cb()
const Div94Props = useStore((state)=>state["Home"]["Div94"]);
const Div94IoProps = useIoStore((state)=>state["Home"]["Div94"]);
const Div94Cb = useDiv94Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Div92Props = useStore((state)=>state["Home"]["Div92"]);
const Div92IoProps = useIoStore((state)=>state["Home"]["Div92"]);
const Div92Cb = useDiv92Cb()
const Div123Props = useStore((state)=>state["Home"]["Div123"]);
const Div123IoProps = useIoStore((state)=>state["Home"]["Div123"]);
const Div123Cb = useDiv123Cb()
const Div121Props = useStore((state)=>state["Home"]["Div121"]);
const Div121IoProps = useIoStore((state)=>state["Home"]["Div121"]);
const Div121Cb = useDiv121Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Div120Props = useStore((state)=>state["Home"]["Div120"]);
const Div120IoProps = useIoStore((state)=>state["Home"]["Div120"]);
const Div120Cb = useDiv120Cb()
const Div122Props = useStore((state)=>state["Home"]["Div122"]);
const Div122IoProps = useIoStore((state)=>state["Home"]["Div122"]);
const Div122Cb = useDiv122Cb()
const Div127Props = useStore((state)=>state["Home"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["Home"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Div125Props = useStore((state)=>state["Home"]["Div125"]);
const Div125IoProps = useIoStore((state)=>state["Home"]["Div125"]);
const Div125Cb = useDiv125Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Div124Props = useStore((state)=>state["Home"]["Div124"]);
const Div124IoProps = useIoStore((state)=>state["Home"]["Div124"]);
const Div124Cb = useDiv124Cb()
const Div126Props = useStore((state)=>state["Home"]["Div126"]);
const Div126IoProps = useIoStore((state)=>state["Home"]["Div126"]);
const Div126Cb = useDiv126Cb()
const Div135Props = useStore((state)=>state["Home"]["Div135"]);
const Div135IoProps = useIoStore((state)=>state["Home"]["Div135"]);
const Div135Cb = useDiv135Cb()
const Div133Props = useStore((state)=>state["Home"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["Home"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Div134Props = useStore((state)=>state["Home"]["Div134"]);
const Div134IoProps = useIoStore((state)=>state["Home"]["Div134"]);
const Div134Cb = useDiv134Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Div132Props = useStore((state)=>state["Home"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["Home"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Projectmanager_blackProps = useStore((state)=>state["Home"]["Projectmanager_black"]);
const Projectmanager_blackIoProps = useIoStore((state)=>state["Home"]["Projectmanager_black"]);
const Projectmanager_blackCb = useProjectmanager_blackCb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const BlogsProps = useStore((state)=>state["Home"]["Blogs"]);
const BlogsIoProps = useIoStore((state)=>state["Home"]["Blogs"]);
const BlogsCb = useBlogsCb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const BloagsdivProps = useStore((state)=>state["Home"]["Bloagsdiv"]);
const BloagsdivIoProps = useIoStore((state)=>state["Home"]["Bloagsdiv"]);
const BloagsdivCb = useBloagsdivCb()
const Div139Props = useStore((state)=>state["Home"]["Div139"]);
const Div139IoProps = useIoStore((state)=>state["Home"]["Div139"]);
const Div139Cb = useDiv139Cb()
const Div138Props = useStore((state)=>state["Home"]["Div138"]);
const Div138IoProps = useIoStore((state)=>state["Home"]["Div138"]);
const Div138Cb = useDiv138Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const blog_card1Props = useStore((state)=>state["Home"]["blog_card1"]);
const blog_card1IoProps = useIoStore((state)=>state["Home"]["blog_card1"]);
const blog_card1Cb = useblog_card1Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Div142Props = useStore((state)=>state["Home"]["Div142"]);
const Div142IoProps = useIoStore((state)=>state["Home"]["Div142"]);
const Div142Cb = useDiv142Cb()
const Div157Props = useStore((state)=>state["Home"]["Div157"]);
const Div157IoProps = useIoStore((state)=>state["Home"]["Div157"]);
const Div157Cb = useDiv157Cb()
const Div156Props = useStore((state)=>state["Home"]["Div156"]);
const Div156IoProps = useIoStore((state)=>state["Home"]["Div156"]);
const Div156Cb = useDiv156Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Div159Props = useStore((state)=>state["Home"]["Div159"]);
const Div159IoProps = useIoStore((state)=>state["Home"]["Div159"]);
const Div159Cb = useDiv159Cb()
const Div158Props = useStore((state)=>state["Home"]["Div158"]);
const Div158IoProps = useIoStore((state)=>state["Home"]["Div158"]);
const Div158Cb = useDiv158Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Div161Props = useStore((state)=>state["Home"]["Div161"]);
const Div161IoProps = useIoStore((state)=>state["Home"]["Div161"]);
const Div161Cb = useDiv161Cb()
const Div160Props = useStore((state)=>state["Home"]["Div160"]);
const Div160IoProps = useIoStore((state)=>state["Home"]["Div160"]);
const Div160Cb = useDiv160Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Div163Props = useStore((state)=>state["Home"]["Div163"]);
const Div163IoProps = useIoStore((state)=>state["Home"]["Div163"]);
const Div163Cb = useDiv163Cb()
const Div162Props = useStore((state)=>state["Home"]["Div162"]);
const Div162IoProps = useIoStore((state)=>state["Home"]["Div162"]);
const Div162Cb = useDiv162Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const ProductBarProps = useStore((state)=>state["Home"]["ProductBar"]);
const ProductBarIoProps = useIoStore((state)=>state["Home"]["ProductBar"]);
const ProductBarCb = useProductBarCb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Div154Props = useStore((state)=>state["Home"]["Div154"]);
const Div154IoProps = useIoStore((state)=>state["Home"]["Div154"]);
const Div154Cb = useDiv154Cb()
const Div155Props = useStore((state)=>state["Home"]["Div155"]);
const Div155IoProps = useIoStore((state)=>state["Home"]["Div155"]);
const Div155Cb = useDiv155Cb()
const ProductImages1Props = useStore((state)=>state["Home"]["ProductImages1"]);
const ProductImages1IoProps = useIoStore((state)=>state["Home"]["ProductImages1"]);
const ProductImages1Cb = useProductImages1Cb()
const Div165Props = useStore((state)=>state["Home"]["Div165"]);
const Div165IoProps = useIoStore((state)=>state["Home"]["Div165"]);
const Div165Cb = useDiv165Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Div177Props = useStore((state)=>state["Home"]["Div177"]);
const Div177IoProps = useIoStore((state)=>state["Home"]["Div177"]);
const Div177Cb = useDiv177Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Div181Props = useStore((state)=>state["Home"]["Div181"]);
const Div181IoProps = useIoStore((state)=>state["Home"]["Div181"]);
const Div181Cb = useDiv181Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Div178Props = useStore((state)=>state["Home"]["Div178"]);
const Div178IoProps = useIoStore((state)=>state["Home"]["Div178"]);
const Div178Cb = useDiv178Cb()
const Div179Props = useStore((state)=>state["Home"]["Div179"]);
const Div179IoProps = useIoStore((state)=>state["Home"]["Div179"]);
const Div179Cb = useDiv179Cb()
const Div182Props = useStore((state)=>state["Home"]["Div182"]);
const Div182IoProps = useIoStore((state)=>state["Home"]["Div182"]);
const Div182Cb = useDiv182Cb()
const Div183Props = useStore((state)=>state["Home"]["Div183"]);
const Div183IoProps = useIoStore((state)=>state["Home"]["Div183"]);
const Div183Cb = useDiv183Cb()
const ExperienceProps = useStore((state)=>state["Home"]["Experience"]);
const ExperienceIoProps = useIoStore((state)=>state["Home"]["Experience"]);
const ExperienceCb = useExperienceCb()
const Div197Props = useStore((state)=>state["Home"]["Div197"]);
const Div197IoProps = useIoStore((state)=>state["Home"]["Div197"]);
const Div197Cb = useDiv197Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Div198Props = useStore((state)=>state["Home"]["Div198"]);
const Div198IoProps = useIoStore((state)=>state["Home"]["Div198"]);
const Div198Cb = useDiv198Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const EducationProps = useStore((state)=>state["Home"]["Education"]);
const EducationIoProps = useIoStore((state)=>state["Home"]["Education"]);
const EducationCb = useEducationCb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Div188Props = useStore((state)=>state["Home"]["Div188"]);
const Div188IoProps = useIoStore((state)=>state["Home"]["Div188"]);
const Div188Cb = useDiv188Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Div190Props = useStore((state)=>state["Home"]["Div190"]);
const Div190IoProps = useIoStore((state)=>state["Home"]["Div190"]);
const Div190Cb = useDiv190Cb()
const Div191Props = useStore((state)=>state["Home"]["Div191"]);
const Div191IoProps = useIoStore((state)=>state["Home"]["Div191"]);
const Div191Cb = useDiv191Cb()
const university_cardProps = useStore((state)=>state["Home"]["university_card"]);
const university_cardIoProps = useIoStore((state)=>state["Home"]["university_card"]);
const university_cardCb = useuniversity_cardCb()
const Div189Props = useStore((state)=>state["Home"]["Div189"]);
const Div189IoProps = useIoStore((state)=>state["Home"]["Div189"]);
const Div189Cb = useDiv189Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Div203Props = useStore((state)=>state["Home"]["Div203"]);
const Div203IoProps = useIoStore((state)=>state["Home"]["Div203"]);
const Div203Cb = useDiv203Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Div202Props = useStore((state)=>state["Home"]["Div202"]);
const Div202IoProps = useIoStore((state)=>state["Home"]["Div202"]);
const Div202Cb = useDiv202Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Div205Props = useStore((state)=>state["Home"]["Div205"]);
const Div205IoProps = useIoStore((state)=>state["Home"]["Div205"]);
const Div205Cb = useDiv205Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Div204Props = useStore((state)=>state["Home"]["Div204"]);
const Div204IoProps = useIoStore((state)=>state["Home"]["Div204"]);
const Div204Cb = useDiv204Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Work_ExperienceProps = useStore((state)=>state["Home"]["Work_Experience"]);
const Work_ExperienceIoProps = useIoStore((state)=>state["Home"]["Work_Experience"]);
const Work_ExperienceCb = useWork_ExperienceCb()
const Div214Props = useStore((state)=>state["Home"]["Div214"]);
const Div214IoProps = useIoStore((state)=>state["Home"]["Div214"]);
const Div214Cb = useDiv214Cb()
const Div210Props = useStore((state)=>state["Home"]["Div210"]);
const Div210IoProps = useIoStore((state)=>state["Home"]["Div210"]);
const Div210Cb = useDiv210Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Div216Props = useStore((state)=>state["Home"]["Div216"]);
const Div216IoProps = useIoStore((state)=>state["Home"]["Div216"]);
const Div216Cb = useDiv216Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Div211Props = useStore((state)=>state["Home"]["Div211"]);
const Div211IoProps = useIoStore((state)=>state["Home"]["Div211"]);
const Div211Cb = useDiv211Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Div206Props = useStore((state)=>state["Home"]["Div206"]);
const Div206IoProps = useIoStore((state)=>state["Home"]["Div206"]);
const Div206Cb = useDiv206Cb()
const Div207Props = useStore((state)=>state["Home"]["Div207"]);
const Div207IoProps = useIoStore((state)=>state["Home"]["Div207"]);
const Div207Cb = useDiv207Cb()
const Div219Props = useStore((state)=>state["Home"]["Div219"]);
const Div219IoProps = useIoStore((state)=>state["Home"]["Div219"]);
const Div219Cb = useDiv219Cb()
const Div218Props = useStore((state)=>state["Home"]["Div218"]);
const Div218IoProps = useIoStore((state)=>state["Home"]["Div218"]);
const Div218Cb = useDiv218Cb()
const Flex136Props = useStore((state)=>state["Home"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Home"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Div217Props = useStore((state)=>state["Home"]["Div217"]);
const Div217IoProps = useIoStore((state)=>state["Home"]["Div217"]);
const Div217Cb = useDiv217Cb()
const Div222Props = useStore((state)=>state["Home"]["Div222"]);
const Div222IoProps = useIoStore((state)=>state["Home"]["Div222"]);
const Div222Cb = useDiv222Cb()
const Div221Props = useStore((state)=>state["Home"]["Div221"]);
const Div221IoProps = useIoStore((state)=>state["Home"]["Div221"]);
const Div221Cb = useDiv221Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Div220Props = useStore((state)=>state["Home"]["Div220"]);
const Div220IoProps = useIoStore((state)=>state["Home"]["Div220"]);
const Div220Cb = useDiv220Cb()
const TestimonialsProps = useStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsIoProps = useIoStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsCb = useTestimonialsCb()
const Div224Props = useStore((state)=>state["Home"]["Div224"]);
const Div224IoProps = useIoStore((state)=>state["Home"]["Div224"]);
const Div224Cb = useDiv224Cb()
const Div225Props = useStore((state)=>state["Home"]["Div225"]);
const Div225IoProps = useIoStore((state)=>state["Home"]["Div225"]);
const Div225Cb = useDiv225Cb()
const Flex149Props = useStore((state)=>state["Home"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["Home"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Div243Props = useStore((state)=>state["Home"]["Div243"]);
const Div243IoProps = useIoStore((state)=>state["Home"]["Div243"]);
const Div243Cb = useDiv243Cb()
const Flex142Props = useStore((state)=>state["Home"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["Home"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Div226Props = useStore((state)=>state["Home"]["Div226"]);
const Div226IoProps = useIoStore((state)=>state["Home"]["Div226"]);
const Div226Cb = useDiv226Cb()
const Div227Props = useStore((state)=>state["Home"]["Div227"]);
const Div227IoProps = useIoStore((state)=>state["Home"]["Div227"]);
const Div227Cb = useDiv227Cb()
const Flex143Props = useStore((state)=>state["Home"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Home"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Div228Props = useStore((state)=>state["Home"]["Div228"]);
const Div228IoProps = useIoStore((state)=>state["Home"]["Div228"]);
const Div228Cb = useDiv228Cb()
const Div229Props = useStore((state)=>state["Home"]["Div229"]);
const Div229IoProps = useIoStore((state)=>state["Home"]["Div229"]);
const Div229Cb = useDiv229Cb()
const Flex144Props = useStore((state)=>state["Home"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["Home"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Div230Props = useStore((state)=>state["Home"]["Div230"]);
const Div230IoProps = useIoStore((state)=>state["Home"]["Div230"]);
const Div230Cb = useDiv230Cb()
const Div233Props = useStore((state)=>state["Home"]["Div233"]);
const Div233IoProps = useIoStore((state)=>state["Home"]["Div233"]);
const Div233Cb = useDiv233Cb()
const Div234Props = useStore((state)=>state["Home"]["Div234"]);
const Div234IoProps = useIoStore((state)=>state["Home"]["Div234"]);
const Div234Cb = useDiv234Cb()
const Div231Props = useStore((state)=>state["Home"]["Div231"]);
const Div231IoProps = useIoStore((state)=>state["Home"]["Div231"]);
const Div231Cb = useDiv231Cb()
const Flex145Props = useStore((state)=>state["Home"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["Home"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Div232Props = useStore((state)=>state["Home"]["Div232"]);
const Div232IoProps = useIoStore((state)=>state["Home"]["Div232"]);
const Div232Cb = useDiv232Cb()
const FAQsProps = useStore((state)=>state["Home"]["FAQs"]);
const FAQsIoProps = useIoStore((state)=>state["Home"]["FAQs"]);
const FAQsCb = useFAQsCb()
const Div245Props = useStore((state)=>state["Home"]["Div245"]);
const Div245IoProps = useIoStore((state)=>state["Home"]["Div245"]);
const Div245Cb = useDiv245Cb()
const Div255Props = useStore((state)=>state["Home"]["Div255"]);
const Div255IoProps = useIoStore((state)=>state["Home"]["Div255"]);
const Div255Cb = useDiv255Cb()
const Div254Props = useStore((state)=>state["Home"]["Div254"]);
const Div254IoProps = useIoStore((state)=>state["Home"]["Div254"]);
const Div254Cb = useDiv254Cb()
const Div246Props = useStore((state)=>state["Home"]["Div246"]);
const Div246IoProps = useIoStore((state)=>state["Home"]["Div246"]);
const Div246Cb = useDiv246Cb()
const Flex150Props = useStore((state)=>state["Home"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["Home"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Div247Props = useStore((state)=>state["Home"]["Div247"]);
const Div247IoProps = useIoStore((state)=>state["Home"]["Div247"]);
const Div247Cb = useDiv247Cb()
const Flex151Props = useStore((state)=>state["Home"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["Home"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const leftcolumnProps = useStore((state)=>state["Home"]["leftcolumn"]);
const leftcolumnIoProps = useIoStore((state)=>state["Home"]["leftcolumn"]);
const leftcolumnCb = useleftcolumnCb()
const Div250Props = useStore((state)=>state["Home"]["Div250"]);
const Div250IoProps = useIoStore((state)=>state["Home"]["Div250"]);
const Div250Cb = useDiv250Cb()
const faqCard1Props = useStore((state)=>state["Home"]["faqCard1"]);
const faqCard1IoProps = useIoStore((state)=>state["Home"]["faqCard1"]);
const faqCard1Cb = usefaqCard1Cb()
const Flex156Props = useStore((state)=>state["Home"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Home"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Div283Props = useStore((state)=>state["Home"]["Div283"]);
const Div283IoProps = useIoStore((state)=>state["Home"]["Div283"]);
const Div283Cb = useDiv283Cb()
const Flex175Props = useStore((state)=>state["Home"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["Home"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Div285Props = useStore((state)=>state["Home"]["Div285"]);
const Div285IoProps = useIoStore((state)=>state["Home"]["Div285"]);
const Div285Cb = useDiv285Cb()
const Flex177Props = useStore((state)=>state["Home"]["Flex177"]);
const Flex177IoProps = useIoStore((state)=>state["Home"]["Flex177"]);
const Flex177Cb = useFlex177Cb()
const Div284Props = useStore((state)=>state["Home"]["Div284"]);
const Div284IoProps = useIoStore((state)=>state["Home"]["Div284"]);
const Div284Cb = useDiv284Cb()
const Flex176Props = useStore((state)=>state["Home"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Home"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const Div291Props = useStore((state)=>state["Home"]["Div291"]);
const Div291IoProps = useIoStore((state)=>state["Home"]["Div291"]);
const Div291Cb = useDiv291Cb()
const Div290Props = useStore((state)=>state["Home"]["Div290"]);
const Div290IoProps = useIoStore((state)=>state["Home"]["Div290"]);
const Div290Cb = useDiv290Cb()
const Div287Props = useStore((state)=>state["Home"]["Div287"]);
const Div287IoProps = useIoStore((state)=>state["Home"]["Div287"]);
const Div287Cb = useDiv287Cb()
const Flex179Props = useStore((state)=>state["Home"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["Home"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const Div288Props = useStore((state)=>state["Home"]["Div288"]);
const Div288IoProps = useIoStore((state)=>state["Home"]["Div288"]);
const Div288Cb = useDiv288Cb()
const Div286Props = useStore((state)=>state["Home"]["Div286"]);
const Div286IoProps = useIoStore((state)=>state["Home"]["Div286"]);
const Div286Cb = useDiv286Cb()
const Flex178Props = useStore((state)=>state["Home"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Home"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex180Props = useStore((state)=>state["Home"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["Home"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const Div289Props = useStore((state)=>state["Home"]["Div289"]);
const Div289IoProps = useIoStore((state)=>state["Home"]["Div289"]);
const Div289Cb = useDiv289Cb()
const Flex181Props = useStore((state)=>state["Home"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["Home"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const call_meProps = useStore((state)=>state["Home"]["call_me"]);
const call_meIoProps = useIoStore((state)=>state["Home"]["call_me"]);
const call_meCb = usecall_meCb()
const Div279Props = useStore((state)=>state["Home"]["Div279"]);
const Div279IoProps = useIoStore((state)=>state["Home"]["Div279"]);
const Div279Cb = useDiv279Cb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const Div274Props = useStore((state)=>state["Home"]["Div274"]);
const Div274IoProps = useIoStore((state)=>state["Home"]["Div274"]);
const Div274Cb = useDiv274Cb()
const Flex166Props = useStore((state)=>state["Home"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["Home"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Div275Props = useStore((state)=>state["Home"]["Div275"]);
const Div275IoProps = useIoStore((state)=>state["Home"]["Div275"]);
const Div275Cb = useDiv275Cb()
const Flex167Props = useStore((state)=>state["Home"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["Home"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Div277Props = useStore((state)=>state["Home"]["Div277"]);
const Div277IoProps = useIoStore((state)=>state["Home"]["Div277"]);
const Div277Cb = useDiv277Cb()
const Div280Props = useStore((state)=>state["Home"]["Div280"]);
const Div280IoProps = useIoStore((state)=>state["Home"]["Div280"]);
const Div280Cb = useDiv280Cb()
const Div281Props = useStore((state)=>state["Home"]["Div281"]);
const Div281IoProps = useIoStore((state)=>state["Home"]["Div281"]);
const Div281Cb = useDiv281Cb()
const Div278Props = useStore((state)=>state["Home"]["Div278"]);
const Div278IoProps = useIoStore((state)=>state["Home"]["Div278"]);
const Div278Cb = useDiv278Cb()
const Flex168Props = useStore((state)=>state["Home"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Home"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex173Props = useStore((state)=>state["Home"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["Home"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex174Props = useStore((state)=>state["Home"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["Home"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const Div282Props = useStore((state)=>state["Home"]["Div282"]);
const Div282IoProps = useIoStore((state)=>state["Home"]["Div282"]);
const Div282Cb = useDiv282Cb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const ServiceProps = useStore((state)=>state["Home"]["Service"]);
const ServiceIoProps = useIoStore((state)=>state["Home"]["Service"]);
const ServiceCb = useServiceCb()
const ProjectProps = useStore((state)=>state["Home"]["Project"]);
const ProjectIoProps = useIoStore((state)=>state["Home"]["Project"]);
const ProjectCb = useProjectCb()
const BlogProps = useStore((state)=>state["Home"]["Blog"]);
const BlogIoProps = useIoStore((state)=>state["Home"]["Blog"]);
const BlogCb = useBlogCb()
const Book_a_callProps = useStore((state)=>state["Home"]["Book_a_call"]);
const Book_a_callIoProps = useIoStore((state)=>state["Home"]["Book_a_call"]);
const Book_a_callCb = useBook_a_callCb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const PortfolioCreatorProps = useStore((state)=>state["Home"]["PortfolioCreator"]);
const PortfolioCreatorIoProps = useIoStore((state)=>state["Home"]["PortfolioCreator"]);
const PortfolioCreatorCb = usePortfolioCreatorCb()
const DotImageProps = useStore((state)=>state["Home"]["DotImage"]);
const DotImageIoProps = useIoStore((state)=>state["Home"]["DotImage"]);
const DotImageCb = useDotImageCb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Book_a_calProps = useStore((state)=>state["Home"]["Book_a_cal"]);
const Book_a_calIoProps = useIoStore((state)=>state["Home"]["Book_a_cal"]);
const Book_a_calCb = useBook_a_calCb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const My_imageProps = useStore((state)=>state["Home"]["My_image"]);
const My_imageIoProps = useIoStore((state)=>state["Home"]["My_image"]);
const My_imageCb = useMy_imageCb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const view_projectsProps = useStore((state)=>state["Home"]["view_projects"]);
const view_projectsIoProps = useIoStore((state)=>state["Home"]["view_projects"]);
const view_projectsCb = useview_projectsCb()
const projectsProps = useStore((state)=>state["Home"]["projects"]);
const projectsIoProps = useIoStore((state)=>state["Home"]["projects"]);
const projectsCb = useprojectsCb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox159Props = useStore((state)=>state["Home"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox218Props = useStore((state)=>state["Home"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Home"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox213Props = useStore((state)=>state["Home"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["Home"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Home"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox216Props = useStore((state)=>state["Home"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Home"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const TextBox217Props = useStore((state)=>state["Home"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Home"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox220Props = useStore((state)=>state["Home"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Home"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox221Props = useStore((state)=>state["Home"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Home"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["Home"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox230Props = useStore((state)=>state["Home"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox236Props = useStore((state)=>state["Home"]["TextBox236"]);
const TextBox236IoProps = useIoStore((state)=>state["Home"]["TextBox236"]);
const TextBox236Cb = useTextBox236Cb()
const TextBox231Props = useStore((state)=>state["Home"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox232Props = useStore((state)=>state["Home"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const TextBox233Props = useStore((state)=>state["Home"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["Home"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const TextBox234Props = useStore((state)=>state["Home"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["Home"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const TextBox235Props = useStore((state)=>state["Home"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["Home"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const TextBox210Props = useStore((state)=>state["Home"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Home"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox211Props = useStore((state)=>state["Home"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Home"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["Home"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Home"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const Image74Props = useStore((state)=>state["Home"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home"]["Image74"]);
const Image74Cb = useImage74Cb()
const Image75Props = useStore((state)=>state["Home"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Home"]["Image75"]);
const Image75Cb = useImage75Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const Image78Props = useStore((state)=>state["Home"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox238Props = useStore((state)=>state["Home"]["TextBox238"]);
const TextBox238IoProps = useIoStore((state)=>state["Home"]["TextBox238"]);
const TextBox238Cb = useTextBox238Cb()
const TextBox243Props = useStore((state)=>state["Home"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["Home"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const TextBox239Props = useStore((state)=>state["Home"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["Home"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const Image83Props = useStore((state)=>state["Home"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["Home"]["Image83"]);
const Image83Cb = useImage83Cb()
const TextBox240Props = useStore((state)=>state["Home"]["TextBox240"]);
const TextBox240IoProps = useIoStore((state)=>state["Home"]["TextBox240"]);
const TextBox240Cb = useTextBox240Cb()
const TextBox241Props = useStore((state)=>state["Home"]["TextBox241"]);
const TextBox241IoProps = useIoStore((state)=>state["Home"]["TextBox241"]);
const TextBox241Cb = useTextBox241Cb()
const TextBox242Props = useStore((state)=>state["Home"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["Home"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const TextBox259Props = useStore((state)=>state["Home"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["Home"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox258Props = useStore((state)=>state["Home"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["Home"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const TextBox255Props = useStore((state)=>state["Home"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["Home"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox256Props = useStore((state)=>state["Home"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["Home"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const Image87Props = useStore((state)=>state["Home"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["Home"]["Image87"]);
const Image87Cb = useImage87Cb()
const TextBox257Props = useStore((state)=>state["Home"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Home"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox264Props = useStore((state)=>state["Home"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["Home"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const TextBox263Props = useStore((state)=>state["Home"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["Home"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const TextBox260Props = useStore((state)=>state["Home"]["TextBox260"]);
const TextBox260IoProps = useIoStore((state)=>state["Home"]["TextBox260"]);
const TextBox260Cb = useTextBox260Cb()
const TextBox261Props = useStore((state)=>state["Home"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["Home"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const Image88Props = useStore((state)=>state["Home"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["Home"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox262Props = useStore((state)=>state["Home"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["Home"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const TextBox280Props = useStore((state)=>state["Home"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["Home"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const Image92Props = useStore((state)=>state["Home"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Home"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image94Props = useStore((state)=>state["Home"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["Home"]["Image94"]);
const Image94Cb = useImage94Cb()
const TextBox274Props = useStore((state)=>state["Home"]["TextBox274"]);
const TextBox274IoProps = useIoStore((state)=>state["Home"]["TextBox274"]);
const TextBox274Cb = useTextBox274Cb()
const TextBox277Props = useStore((state)=>state["Home"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["Home"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const TextBox272Props = useStore((state)=>state["Home"]["TextBox272"]);
const TextBox272IoProps = useIoStore((state)=>state["Home"]["TextBox272"]);
const TextBox272Cb = useTextBox272Cb()
const TextBox273Props = useStore((state)=>state["Home"]["TextBox273"]);
const TextBox273IoProps = useIoStore((state)=>state["Home"]["TextBox273"]);
const TextBox273Cb = useTextBox273Cb()
const TextBox265Props = useStore((state)=>state["Home"]["TextBox265"]);
const TextBox265IoProps = useIoStore((state)=>state["Home"]["TextBox265"]);
const TextBox265Cb = useTextBox265Cb()
const Image89Props = useStore((state)=>state["Home"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Home"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox286Props = useStore((state)=>state["Home"]["TextBox286"]);
const TextBox286IoProps = useIoStore((state)=>state["Home"]["TextBox286"]);
const TextBox286Cb = useTextBox286Cb()
const Image96Props = useStore((state)=>state["Home"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["Home"]["Image96"]);
const Image96Cb = useImage96Cb()
const TextBox285Props = useStore((state)=>state["Home"]["TextBox285"]);
const TextBox285IoProps = useIoStore((state)=>state["Home"]["TextBox285"]);
const TextBox285Cb = useTextBox285Cb()
const TextBox284Props = useStore((state)=>state["Home"]["TextBox284"]);
const TextBox284IoProps = useIoStore((state)=>state["Home"]["TextBox284"]);
const TextBox284Cb = useTextBox284Cb()
const TextBox282Props = useStore((state)=>state["Home"]["TextBox282"]);
const TextBox282IoProps = useIoStore((state)=>state["Home"]["TextBox282"]);
const TextBox282Cb = useTextBox282Cb()
const TextBox283Props = useStore((state)=>state["Home"]["TextBox283"]);
const TextBox283IoProps = useIoStore((state)=>state["Home"]["TextBox283"]);
const TextBox283Cb = useTextBox283Cb()
const Image95Props = useStore((state)=>state["Home"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["Home"]["Image95"]);
const Image95Cb = useImage95Cb()
const TextBox291Props = useStore((state)=>state["Home"]["TextBox291"]);
const TextBox291IoProps = useIoStore((state)=>state["Home"]["TextBox291"]);
const TextBox291Cb = useTextBox291Cb()
const Image98Props = useStore((state)=>state["Home"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["Home"]["Image98"]);
const Image98Cb = useImage98Cb()
const TextBox290Props = useStore((state)=>state["Home"]["TextBox290"]);
const TextBox290IoProps = useIoStore((state)=>state["Home"]["TextBox290"]);
const TextBox290Cb = useTextBox290Cb()
const TextBox289Props = useStore((state)=>state["Home"]["TextBox289"]);
const TextBox289IoProps = useIoStore((state)=>state["Home"]["TextBox289"]);
const TextBox289Cb = useTextBox289Cb()
const TextBox287Props = useStore((state)=>state["Home"]["TextBox287"]);
const TextBox287IoProps = useIoStore((state)=>state["Home"]["TextBox287"]);
const TextBox287Cb = useTextBox287Cb()
const TextBox288Props = useStore((state)=>state["Home"]["TextBox288"]);
const TextBox288IoProps = useIoStore((state)=>state["Home"]["TextBox288"]);
const TextBox288Cb = useTextBox288Cb()
const Image97Props = useStore((state)=>state["Home"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["Home"]["Image97"]);
const Image97Cb = useImage97Cb()
const TextBox292Props = useStore((state)=>state["Home"]["TextBox292"]);
const TextBox292IoProps = useIoStore((state)=>state["Home"]["TextBox292"]);
const TextBox292Cb = useTextBox292Cb()
const TextBox293Props = useStore((state)=>state["Home"]["TextBox293"]);
const TextBox293IoProps = useIoStore((state)=>state["Home"]["TextBox293"]);
const TextBox293Cb = useTextBox293Cb()
const Image99Props = useStore((state)=>state["Home"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["Home"]["Image99"]);
const Image99Cb = useImage99Cb()
const Image100Props = useStore((state)=>state["Home"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["Home"]["Image100"]);
const Image100Cb = useImage100Cb()
const TextBox295Props = useStore((state)=>state["Home"]["TextBox295"]);
const TextBox295IoProps = useIoStore((state)=>state["Home"]["TextBox295"]);
const TextBox295Cb = useTextBox295Cb()
const TextBox296Props = useStore((state)=>state["Home"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["Home"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const TextBox294Props = useStore((state)=>state["Home"]["TextBox294"]);
const TextBox294IoProps = useIoStore((state)=>state["Home"]["TextBox294"]);
const TextBox294Cb = useTextBox294Cb()
const TextBox302Props = useStore((state)=>state["Home"]["TextBox302"]);
const TextBox302IoProps = useIoStore((state)=>state["Home"]["TextBox302"]);
const TextBox302Cb = useTextBox302Cb()
const TextBox303Props = useStore((state)=>state["Home"]["TextBox303"]);
const TextBox303IoProps = useIoStore((state)=>state["Home"]["TextBox303"]);
const TextBox303Cb = useTextBox303Cb()
const TextBox305Props = useStore((state)=>state["Home"]["TextBox305"]);
const TextBox305IoProps = useIoStore((state)=>state["Home"]["TextBox305"]);
const TextBox305Cb = useTextBox305Cb()
const TextBox304Props = useStore((state)=>state["Home"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["Home"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const Image104Props = useStore((state)=>state["Home"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["Home"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox352Props = useStore((state)=>state["Home"]["TextBox352"]);
const TextBox352IoProps = useIoStore((state)=>state["Home"]["TextBox352"]);
const TextBox352Cb = useTextBox352Cb()
const Image116Props = useStore((state)=>state["Home"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["Home"]["Image116"]);
const Image116Cb = useImage116Cb()
const TextBox351Props = useStore((state)=>state["Home"]["TextBox351"]);
const TextBox351IoProps = useIoStore((state)=>state["Home"]["TextBox351"]);
const TextBox351Cb = useTextBox351Cb()
const TextBox356Props = useStore((state)=>state["Home"]["TextBox356"]);
const TextBox356IoProps = useIoStore((state)=>state["Home"]["TextBox356"]);
const TextBox356Cb = useTextBox356Cb()
const Image118Props = useStore((state)=>state["Home"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Home"]["Image118"]);
const Image118Cb = useImage118Cb()
const TextBox355Props = useStore((state)=>state["Home"]["TextBox355"]);
const TextBox355IoProps = useIoStore((state)=>state["Home"]["TextBox355"]);
const TextBox355Cb = useTextBox355Cb()
const TextBox354Props = useStore((state)=>state["Home"]["TextBox354"]);
const TextBox354IoProps = useIoStore((state)=>state["Home"]["TextBox354"]);
const TextBox354Cb = useTextBox354Cb()
const Image117Props = useStore((state)=>state["Home"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["Home"]["Image117"]);
const Image117Cb = useImage117Cb()
const TextBox353Props = useStore((state)=>state["Home"]["TextBox353"]);
const TextBox353IoProps = useIoStore((state)=>state["Home"]["TextBox353"]);
const TextBox353Cb = useTextBox353Cb()
const TextBox362Props = useStore((state)=>state["Home"]["TextBox362"]);
const TextBox362IoProps = useIoStore((state)=>state["Home"]["TextBox362"]);
const TextBox362Cb = useTextBox362Cb()
const TextBox358Props = useStore((state)=>state["Home"]["TextBox358"]);
const TextBox358IoProps = useIoStore((state)=>state["Home"]["TextBox358"]);
const TextBox358Cb = useTextBox358Cb()
const Image120Props = useStore((state)=>state["Home"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Home"]["Image120"]);
const Image120Cb = useImage120Cb()
const TextBox363Props = useStore((state)=>state["Home"]["TextBox363"]);
const TextBox363IoProps = useIoStore((state)=>state["Home"]["TextBox363"]);
const TextBox363Cb = useTextBox363Cb()
const TextBox359Props = useStore((state)=>state["Home"]["TextBox359"]);
const TextBox359IoProps = useIoStore((state)=>state["Home"]["TextBox359"]);
const TextBox359Cb = useTextBox359Cb()
const TextBox357Props = useStore((state)=>state["Home"]["TextBox357"]);
const TextBox357IoProps = useIoStore((state)=>state["Home"]["TextBox357"]);
const TextBox357Cb = useTextBox357Cb()
const Image119Props = useStore((state)=>state["Home"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Home"]["Image119"]);
const Image119Cb = useImage119Cb()
const TextBox360Props = useStore((state)=>state["Home"]["TextBox360"]);
const TextBox360IoProps = useIoStore((state)=>state["Home"]["TextBox360"]);
const TextBox360Cb = useTextBox360Cb()
const Image121Props = useStore((state)=>state["Home"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["Home"]["Image121"]);
const Image121Cb = useImage121Cb()
const TextBox364Props = useStore((state)=>state["Home"]["TextBox364"]);
const TextBox364IoProps = useIoStore((state)=>state["Home"]["TextBox364"]);
const TextBox364Cb = useTextBox364Cb()
const Image122Props = useStore((state)=>state["Home"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["Home"]["Image122"]);
const Image122Cb = useImage122Cb()
const TextBox361Props = useStore((state)=>state["Home"]["TextBox361"]);
const TextBox361IoProps = useIoStore((state)=>state["Home"]["TextBox361"]);
const TextBox361Cb = useTextBox361Cb()
const TextBox324Props = useStore((state)=>state["Home"]["TextBox324"]);
const TextBox324IoProps = useIoStore((state)=>state["Home"]["TextBox324"]);
const TextBox324Cb = useTextBox324Cb()
const TextBox325Props = useStore((state)=>state["Home"]["TextBox325"]);
const TextBox325IoProps = useIoStore((state)=>state["Home"]["TextBox325"]);
const TextBox325Cb = useTextBox325Cb()
const TextBox329Props = useStore((state)=>state["Home"]["TextBox329"]);
const TextBox329IoProps = useIoStore((state)=>state["Home"]["TextBox329"]);
const TextBox329Cb = useTextBox329Cb()
const TextBox328Props = useStore((state)=>state["Home"]["TextBox328"]);
const TextBox328IoProps = useIoStore((state)=>state["Home"]["TextBox328"]);
const TextBox328Cb = useTextBox328Cb()
const Image114Props = useStore((state)=>state["Home"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["Home"]["Image114"]);
const Image114Cb = useImage114Cb()
const Image115Props = useStore((state)=>state["Home"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["Home"]["Image115"]);
const Image115Cb = useImage115Cb()
const TextBox331Props = useStore((state)=>state["Home"]["TextBox331"]);
const TextBox331IoProps = useIoStore((state)=>state["Home"]["TextBox331"]);
const TextBox331Cb = useTextBox331Cb()
const TextBox332Props = useStore((state)=>state["Home"]["TextBox332"]);
const TextBox332IoProps = useIoStore((state)=>state["Home"]["TextBox332"]);
const TextBox332Cb = useTextBox332Cb()
const TextBox335Props = useStore((state)=>state["Home"]["TextBox335"]);
const TextBox335IoProps = useIoStore((state)=>state["Home"]["TextBox335"]);
const TextBox335Cb = useTextBox335Cb()
const TextBox336Props = useStore((state)=>state["Home"]["TextBox336"]);
const TextBox336IoProps = useIoStore((state)=>state["Home"]["TextBox336"]);
const TextBox336Cb = useTextBox336Cb()
const TextBox343Props = useStore((state)=>state["Home"]["TextBox343"]);
const TextBox343IoProps = useIoStore((state)=>state["Home"]["TextBox343"]);
const TextBox343Cb = useTextBox343Cb()
const TextBox344Props = useStore((state)=>state["Home"]["TextBox344"]);
const TextBox344IoProps = useIoStore((state)=>state["Home"]["TextBox344"]);
const TextBox344Cb = useTextBox344Cb()
const TextBox345Props = useStore((state)=>state["Home"]["TextBox345"]);
const TextBox345IoProps = useIoStore((state)=>state["Home"]["TextBox345"]);
const TextBox345Cb = useTextBox345Cb()
const TextBox346Props = useStore((state)=>state["Home"]["TextBox346"]);
const TextBox346IoProps = useIoStore((state)=>state["Home"]["TextBox346"]);
const TextBox346Cb = useTextBox346Cb()
const TextBox347Props = useStore((state)=>state["Home"]["TextBox347"]);
const TextBox347IoProps = useIoStore((state)=>state["Home"]["TextBox347"]);
const TextBox347Cb = useTextBox347Cb()
const TextBox348Props = useStore((state)=>state["Home"]["TextBox348"]);
const TextBox348IoProps = useIoStore((state)=>state["Home"]["TextBox348"]);
const TextBox348Cb = useTextBox348Cb()
const TextBox350Props = useStore((state)=>state["Home"]["TextBox350"]);
const TextBox350IoProps = useIoStore((state)=>state["Home"]["TextBox350"]);
const TextBox350Cb = useTextBox350Cb()

  return (<>
  <Div className="p-Home Nav_bar bpt" {...Nav_barProps} {...Nav_barCb} {...Nav_barIoProps}>
<Flex className="p-Home Nav_flex bpt" {...Nav_flexProps} {...Nav_flexCb} {...Nav_flexIoProps}>
<Flex className="p-Home dotflex bpt" {...dotflexProps} {...dotflexCb} {...dotflexIoProps}>
<TextBox className="p-Home PortfolioCreator bpt" {...PortfolioCreatorProps} {...PortfolioCreatorCb} {...PortfolioCreatorIoProps}/>
<Image className="p-Home DotImage bpt" {...DotImageProps} {...DotImageCb} {...DotImageIoProps}/>
</Flex>
<Div className="p-Home Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<TextBox className="p-Home Service bpt" {...ServiceProps} {...ServiceCb} {...ServiceIoProps}/>
<TextBox className="p-Home Project bpt" {...ProjectProps} {...ProjectCb} {...ProjectIoProps}/>
<TextBox className="p-Home Blog bpt" {...BlogProps} {...BlogCb} {...BlogIoProps}/>
<Div className="p-Home Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<TextBox className="p-Home Book_a_call bpt" {...Book_a_callProps} {...Book_a_callCb} {...Book_a_callIoProps}/>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Introduction bpt" {...IntroductionProps} {...IntroductionCb} {...IntroductionIoProps}>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Div className="p-Home Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex className="p-Home Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Button className="p-Home Book_a_cal bpt" {...Book_a_calProps} {...Book_a_calCb} {...Book_a_calIoProps}/>
<Div className="p-Home Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Image className="p-Home My_image bpt" {...My_imageProps} {...My_imageCb} {...My_imageIoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Trusted_By bpt" {...Trusted_ByProps} {...Trusted_ByCb} {...Trusted_ByIoProps}>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Div>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Div>
<Div className="p-Home Tagdiv bpt" {...TagdivProps} {...TagdivCb} {...TagdivIoProps}>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Div className="p-Home Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Div className="p-Home Card1 bpt" {...Card1Props} {...Card1Cb} {...Card1IoProps}>
<Div className="p-Home Image bpt" {...ImageProps} {...ImageCb} {...ImageIoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Div>
<Div className="p-Home DescriptionCard bpt" {...DescriptionCardProps} {...DescriptionCardCb} {...DescriptionCardIoProps}>
<Div className="p-Home Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
</Div>
</Div>
</Div>
<Div className="p-Home Div46 bpt" {...Div46Props} {...Div46Cb} {...Div46IoProps}>
<Div className="p-Home Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Div>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex>
</Div>
</Div>
</Div>
<Div className="p-Home Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<Div className="p-Home Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Div>
<Div className="p-Home Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Flex>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex>
</Div>
</Div>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}>
<Div className="p-Home Div80 bpt" {...Div80Props} {...Div80Cb} {...Div80IoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Div className="p-Home Div79 bpt" {...Div79Props} {...Div79Cb} {...Div79IoProps}>
<TextBox className="p-Home projects bpt" {...projectsProps} {...projectsCb} {...projectsIoProps}/>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
</Div>
<Button className="p-Home view_projects bpt" {...view_projectsProps} {...view_projectsCb} {...view_projectsIoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Projectmanager_white bpt" {...Projectmanager_whiteProps} {...Projectmanager_whiteCb} {...Projectmanager_whiteIoProps}>
<Div className="p-Home Div84 bpt" {...Div84Props} {...Div84Cb} {...Div84IoProps}>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Div className="p-Home Div85 bpt" {...Div85Props} {...Div85Cb} {...Div85IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Div className="p-Home Project1 bpt" {...Project1Props} {...Project1Cb} {...Project1IoProps}>
<Div className="p-Home Div89 bpt" {...Div89Props} {...Div89Cb} {...Div89IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Div>
<Div className="p-Home Div88 bpt" {...Div88Props} {...Div88Cb} {...Div88IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<Div className="p-Home Div91 bpt" {...Div91Props} {...Div91Cb} {...Div91IoProps}>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Div135 bpt" {...Div135Props} {...Div135Cb} {...Div135IoProps}>
<Div className="p-Home Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Div>
<Div className="p-Home Div134 bpt" {...Div134Props} {...Div134Cb} {...Div134IoProps}>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<Div className="p-Home Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Div95 bpt" {...Div95Props} {...Div95Cb} {...Div95IoProps}>
<Div className="p-Home Div93 bpt" {...Div93Props} {...Div93Cb} {...Div93IoProps}>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Div>
<Div className="p-Home Div94 bpt" {...Div94Props} {...Div94Cb} {...Div94IoProps}>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<Div className="p-Home Div92 bpt" {...Div92Props} {...Div92Cb} {...Div92IoProps}>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Div127 bpt" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<Div className="p-Home Div126 bpt" {...Div126Props} {...Div126Cb} {...Div126IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Div>
<Div className="p-Home Div125 bpt" {...Div125Props} {...Div125Cb} {...Div125IoProps}>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox className="p-Home TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<Div className="p-Home Div124 bpt" {...Div124Props} {...Div124Cb} {...Div124IoProps}>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Div123 bpt" {...Div123Props} {...Div123Cb} {...Div123IoProps}>
<Div className="p-Home Div122 bpt" {...Div122Props} {...Div122Cb} {...Div122IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Div>
<Div className="p-Home Div121 bpt" {...Div121Props} {...Div121Cb} {...Div121IoProps}>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox className="p-Home TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox className="p-Home TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<Div className="p-Home Div120 bpt" {...Div120Props} {...Div120Cb} {...Div120IoProps}>
<TextBox className="p-Home TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Div>
</Flex>
</Div>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Projectmanager_black bpt" {...Projectmanager_blackProps} {...Projectmanager_blackCb} {...Projectmanager_blackIoProps}>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex>
</Div>
<Div className="p-Home Blogs bpt" {...BlogsProps} {...BlogsCb} {...BlogsIoProps}>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Div className="p-Home Bloagsdiv bpt" {...BloagsdivProps} {...BloagsdivCb} {...BloagsdivIoProps}>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<Div className="p-Home Div139 bpt" {...Div139Props} {...Div139Cb} {...Div139IoProps}>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Div>
</Div>
<Div className="p-Home Div138 bpt" {...Div138Props} {...Div138Cb} {...Div138IoProps}>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Div className="p-Home blog_card1 bpt" {...blog_card1Props} {...blog_card1Cb} {...blog_card1IoProps}>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex>
<Div className="p-Home Div142 bpt" {...Div142Props} {...Div142Cb} {...Div142IoProps}>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
</Div>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Div>
<Div className="p-Home Div157 bpt" {...Div157Props} {...Div157Cb} {...Div157IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<TextBox className="p-Home TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox className="p-Home TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<TextBox className="p-Home TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
</Flex>
<Div className="p-Home Div156 bpt" {...Div156Props} {...Div156Cb} {...Div156IoProps}>
<TextBox className="p-Home TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<TextBox className="p-Home TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Div>
<TextBox className="p-Home TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
</Div>
<Div className="p-Home Div159 bpt" {...Div159Props} {...Div159Cb} {...Div159IoProps}>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<TextBox className="p-Home TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<TextBox className="p-Home TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox className="p-Home TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
</Flex>
<Div className="p-Home Div158 bpt" {...Div158Props} {...Div158Cb} {...Div158IoProps}>
<TextBox className="p-Home TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<TextBox className="p-Home TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Div>
<TextBox className="p-Home TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
</Div>
<Div className="p-Home Div161 bpt" {...Div161Props} {...Div161Cb} {...Div161IoProps}>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<TextBox className="p-Home TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<TextBox className="p-Home TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<TextBox className="p-Home TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
</Flex>
<Div className="p-Home Div160 bpt" {...Div160Props} {...Div160Cb} {...Div160IoProps}>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Div>
<TextBox className="p-Home TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
</Div>
<Div className="p-Home Div163 bpt" {...Div163Props} {...Div163Cb} {...Div163IoProps}>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<TextBox className="p-Home TextBox235 bpt" {...TextBox235Props} {...TextBox235Cb} {...TextBox235IoProps}/>
<TextBox className="p-Home TextBox233 bpt" {...TextBox233Props} {...TextBox233Cb} {...TextBox233IoProps}/>
<TextBox className="p-Home TextBox234 bpt" {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
</Flex>
<Div className="p-Home Div162 bpt" {...Div162Props} {...Div162Cb} {...Div162IoProps}>
<TextBox className="p-Home TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<TextBox className="p-Home TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
</Div>
<TextBox className="p-Home TextBox236 bpt" {...TextBox236Props} {...TextBox236Cb} {...TextBox236IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home ProductBar bpt" {...ProductBarProps} {...ProductBarCb} {...ProductBarIoProps}>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Div className="p-Home Div154 bpt" {...Div154Props} {...Div154Cb} {...Div154IoProps}>
<TextBox className="p-Home TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
<TextBox className="p-Home TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Div>
<Div className="p-Home Div155 bpt" {...Div155Props} {...Div155Cb} {...Div155IoProps}>
<TextBox className="p-Home TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home ProductImages1 bpt" {...ProductImages1Props} {...ProductImages1Cb} {...ProductImages1IoProps}>
<Div className="p-Home Div165 bpt" {...Div165Props} {...Div165Cb} {...Div165IoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Div className="p-Home Div177 bpt" {...Div177Props} {...Div177Cb} {...Div177IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Div className="p-Home Div183 bpt" {...Div183Props} {...Div183Cb} {...Div183IoProps}>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
</Div>
<Div className="p-Home Div182 bpt" {...Div182Props} {...Div182Cb} {...Div182IoProps}>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Div>
<Div className="p-Home Div181 bpt" {...Div181Props} {...Div181Cb} {...Div181IoProps}>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Div className="p-Home Div178 bpt" {...Div178Props} {...Div178Cb} {...Div178IoProps}>
<Image className="p-Home Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
</Div>
<Div className="p-Home Div179 bpt" {...Div179Props} {...Div179Cb} {...Div179IoProps}>
<Image className="p-Home Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Experience bpt" {...ExperienceProps} {...ExperienceCb} {...ExperienceIoProps}>
<Div className="p-Home Div197 bpt" {...Div197Props} {...Div197Cb} {...Div197IoProps}>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<Div className="p-Home Div198 bpt" {...Div198Props} {...Div198Cb} {...Div198IoProps}>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Div className="p-Home Education bpt" {...EducationProps} {...EducationCb} {...EducationIoProps}>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Div className="p-Home Div188 bpt" {...Div188Props} {...Div188Cb} {...Div188IoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Div className="p-Home Div190 bpt" {...Div190Props} {...Div190Cb} {...Div190IoProps}>
<Image className="p-Home Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
</Div>
<Div className="p-Home Div191 bpt" {...Div191Props} {...Div191Cb} {...Div191IoProps}>
<TextBox className="p-Home TextBox238 bpt" {...TextBox238Props} {...TextBox238Cb} {...TextBox238IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home university_card bpt" {...university_cardProps} {...university_cardCb} {...university_cardIoProps}>
<Div className="p-Home Div189 bpt" {...Div189Props} {...Div189Cb} {...Div189IoProps}>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
<Image className="p-Home Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<TextBox className="p-Home TextBox240 bpt" {...TextBox240Props} {...TextBox240Cb} {...TextBox240IoProps}/>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<TextBox className="p-Home TextBox241 bpt" {...TextBox241Props} {...TextBox241Cb} {...TextBox241IoProps}/>
<TextBox className="p-Home TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
</Div>
<Div className="p-Home Div203 bpt" {...Div203Props} {...Div203Cb} {...Div203IoProps}>
<Div className="p-Home Div202 bpt" {...Div202Props} {...Div202Cb} {...Div202IoProps}>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<TextBox className="p-Home TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
<Image className="p-Home Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox className="p-Home TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox className="p-Home TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<TextBox className="p-Home TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
</Div>
<Div className="p-Home Div205 bpt" {...Div205Props} {...Div205Cb} {...Div205IoProps}>
<Div className="p-Home Div204 bpt" {...Div204Props} {...Div204Cb} {...Div204IoProps}>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox className="p-Home TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
<Image className="p-Home Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<TextBox className="p-Home TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<TextBox className="p-Home TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
<TextBox className="p-Home TextBox260 bpt" {...TextBox260Props} {...TextBox260Cb} {...TextBox260IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
</Div>
</Div>
<Div className="p-Home Work_Experience bpt" {...Work_ExperienceProps} {...Work_ExperienceCb} {...Work_ExperienceIoProps}>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Div className="p-Home Div211 bpt" {...Div211Props} {...Div211Cb} {...Div211IoProps}>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Div className="p-Home Div207 bpt" {...Div207Props} {...Div207Cb} {...Div207IoProps}>
<Image className="p-Home Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
</Div>
<Div className="p-Home Div206 bpt" {...Div206Props} {...Div206Cb} {...Div206IoProps}>
<TextBox className="p-Home TextBox265 bpt" {...TextBox265Props} {...TextBox265Cb} {...TextBox265IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div214 bpt" {...Div214Props} {...Div214Cb} {...Div214IoProps}>
<Div className="p-Home Div210 bpt" {...Div210Props} {...Div210Cb} {...Div210IoProps}>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Div className="p-Home Div216 bpt" {...Div216Props} {...Div216Cb} {...Div216IoProps}>
<Image className="p-Home Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Div>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox274 bpt" {...TextBox274Props} {...TextBox274Cb} {...TextBox274IoProps}/>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<TextBox className="p-Home TextBox273 bpt" {...TextBox273Props} {...TextBox273Cb} {...TextBox273IoProps}/>
<TextBox className="p-Home TextBox272 bpt" {...TextBox272Props} {...TextBox272Cb} {...TextBox272IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Image className="p-Home Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Flex>
</Div>
<TextBox className="p-Home TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
</Div>
<Div className="p-Home Div219 bpt" {...Div219Props} {...Div219Cb} {...Div219IoProps}>
<Div className="p-Home Div218 bpt" {...Div218Props} {...Div218Cb} {...Div218IoProps}>
<Flex className="p-Home Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Div className="p-Home Div217 bpt" {...Div217Props} {...Div217Cb} {...Div217IoProps}>
<Image className="p-Home Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
</Div>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<TextBox className="p-Home TextBox285 bpt" {...TextBox285Props} {...TextBox285Cb} {...TextBox285IoProps}/>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox className="p-Home TextBox284 bpt" {...TextBox284Props} {...TextBox284Cb} {...TextBox284IoProps}/>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<TextBox className="p-Home TextBox282 bpt" {...TextBox282Props} {...TextBox282Cb} {...TextBox282IoProps}/>
<TextBox className="p-Home TextBox283 bpt" {...TextBox283Props} {...TextBox283Cb} {...TextBox283IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Image className="p-Home Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
</Flex>
</Div>
<TextBox className="p-Home TextBox286 bpt" {...TextBox286Props} {...TextBox286Cb} {...TextBox286IoProps}/>
</Div>
<Div className="p-Home Div222 bpt" {...Div222Props} {...Div222Cb} {...Div222IoProps}>
<Div className="p-Home Div221 bpt" {...Div221Props} {...Div221Cb} {...Div221IoProps}>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Div className="p-Home Div220 bpt" {...Div220Props} {...Div220Cb} {...Div220IoProps}>
<Image className="p-Home Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
</Div>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<TextBox className="p-Home TextBox290 bpt" {...TextBox290Props} {...TextBox290Cb} {...TextBox290IoProps}/>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<TextBox className="p-Home TextBox289 bpt" {...TextBox289Props} {...TextBox289Cb} {...TextBox289IoProps}/>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<TextBox className="p-Home TextBox287 bpt" {...TextBox287Props} {...TextBox287Cb} {...TextBox287IoProps}/>
<TextBox className="p-Home TextBox288 bpt" {...TextBox288Props} {...TextBox288Cb} {...TextBox288IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Image className="p-Home Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
</Flex>
</Div>
<TextBox className="p-Home TextBox291 bpt" {...TextBox291Props} {...TextBox291Cb} {...TextBox291IoProps}/>
</Div>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home Testimonials bpt" {...TestimonialsProps} {...TestimonialsCb} {...TestimonialsIoProps}>
<Div className="p-Home Div224 bpt" {...Div224Props} {...Div224Cb} {...Div224IoProps}>
<TextBox className="p-Home TextBox293 bpt" {...TextBox293Props} {...TextBox293Cb} {...TextBox293IoProps}/>
<TextBox className="p-Home TextBox292 bpt" {...TextBox292Props} {...TextBox292Cb} {...TextBox292IoProps}/>
</Div>
<Div className="p-Home Div225 bpt" {...Div225Props} {...Div225Cb} {...Div225IoProps}>
<Flex className="p-Home Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Div className="p-Home Div243 bpt" {...Div243Props} {...Div243Cb} {...Div243IoProps}>
<Flex className="p-Home Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<Div className="p-Home Div226 bpt" {...Div226Props} {...Div226Cb} {...Div226IoProps}>
<Image className="p-Home Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
</Div>
<Div className="p-Home Div227 bpt" {...Div227Props} {...Div227Cb} {...Div227IoProps}>
<Flex className="p-Home Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Div className="p-Home Div228 bpt" {...Div228Props} {...Div228Cb} {...Div228IoProps}>
<Image className="p-Home Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
</Div>
<Div className="p-Home Div232 bpt" {...Div232Props} {...Div232Cb} {...Div232IoProps}>
<TextBox className="p-Home TextBox294 bpt" {...TextBox294Props} {...TextBox294Cb} {...TextBox294IoProps}/>
</Div>
<Div className="p-Home Div229 bpt" {...Div229Props} {...Div229Cb} {...Div229IoProps}>
<Flex className="p-Home Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<Div className="p-Home Div230 bpt" {...Div230Props} {...Div230Cb} {...Div230IoProps}>
<Div className="p-Home Div233 bpt" {...Div233Props} {...Div233Cb} {...Div233IoProps}>
<TextBox className="p-Home TextBox295 bpt" {...TextBox295Props} {...TextBox295Cb} {...TextBox295IoProps}/>
</Div>
<Div className="p-Home Div234 bpt" {...Div234Props} {...Div234Cb} {...Div234IoProps}>
<TextBox className="p-Home TextBox296 bpt" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
</Div>
</Div>
<Div className="p-Home Div231 bpt" {...Div231Props} {...Div231Cb} {...Div231IoProps}>
<Flex className="p-Home Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home FAQs bpt" {...FAQsProps} {...FAQsCb} {...FAQsIoProps}>
<Div className="p-Home Div245 bpt" {...Div245Props} {...Div245Cb} {...Div245IoProps}>
<Div className="p-Home Div255 bpt" {...Div255Props} {...Div255Cb} {...Div255IoProps}>
<Div className="p-Home Div254 bpt" {...Div254Props} {...Div254Cb} {...Div254IoProps}>
<TextBox className="p-Home TextBox303 bpt" {...TextBox303Props} {...TextBox303Cb} {...TextBox303IoProps}/>
<TextBox className="p-Home TextBox302 bpt" {...TextBox302Props} {...TextBox302Cb} {...TextBox302IoProps}/>
</Div>
</Div>
<Div className="p-Home Div246 bpt" {...Div246Props} {...Div246Cb} {...Div246IoProps}>
<Flex className="p-Home Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Div className="p-Home Div247 bpt" {...Div247Props} {...Div247Cb} {...Div247IoProps}>
<Flex className="p-Home Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Div className="p-Home leftcolumn bpt" {...leftcolumnProps} {...leftcolumnCb} {...leftcolumnIoProps}>
<Div className="p-Home Div250 bpt" {...Div250Props} {...Div250Cb} {...Div250IoProps}>
<Div className="p-Home faqCard1 bpt" {...faqCard1Props} {...faqCard1Cb} {...faqCard1IoProps}>
<Flex className="p-Home Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<TextBox className="p-Home TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
<Image className="p-Home Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Flex>
<TextBox className="p-Home TextBox305 bpt" {...TextBox305Props} {...TextBox305Cb} {...TextBox305IoProps}/>
</Div>
<Div className="p-Home Div283 bpt" {...Div283Props} {...Div283Cb} {...Div283IoProps}>
<Flex className="p-Home Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<TextBox className="p-Home TextBox351 bpt" {...TextBox351Props} {...TextBox351Cb} {...TextBox351IoProps}/>
<Image className="p-Home Image116 bpt" {...Image116Props} {...Image116Cb} {...Image116IoProps}/>
</Flex>
<TextBox className="p-Home TextBox352 bpt" {...TextBox352Props} {...TextBox352Cb} {...TextBox352IoProps}/>
<Div className="p-Home Div285 bpt" {...Div285Props} {...Div285Cb} {...Div285IoProps}>
<Flex className="p-Home Flex177 bpt" {...Flex177Props} {...Flex177Cb} {...Flex177IoProps}>
<TextBox className="p-Home TextBox355 bpt" {...TextBox355Props} {...TextBox355Cb} {...TextBox355IoProps}/>
<Image className="p-Home Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
</Flex>
<TextBox className="p-Home TextBox356 bpt" {...TextBox356Props} {...TextBox356Cb} {...TextBox356IoProps}/>
</Div>
</Div>
<Div className="p-Home Div284 bpt" {...Div284Props} {...Div284Cb} {...Div284IoProps}>
<Flex className="p-Home Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<TextBox className="p-Home TextBox353 bpt" {...TextBox353Props} {...TextBox353Cb} {...TextBox353IoProps}/>
<Image className="p-Home Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
</Flex>
<TextBox className="p-Home TextBox354 bpt" {...TextBox354Props} {...TextBox354Cb} {...TextBox354IoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Div291 bpt" {...Div291Props} {...Div291Cb} {...Div291IoProps}>
<Div className="p-Home Div290 bpt" {...Div290Props} {...Div290Cb} {...Div290IoProps}>
<Div className="p-Home Div289 bpt" {...Div289Props} {...Div289Cb} {...Div289IoProps}>
<Flex className="p-Home Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<TextBox className="p-Home TextBox361 bpt" {...TextBox361Props} {...TextBox361Cb} {...TextBox361IoProps}/>
<Image className="p-Home Image122 bpt" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
</Flex>
<TextBox className="p-Home TextBox364 bpt" {...TextBox364Props} {...TextBox364Cb} {...TextBox364IoProps}/>
</Div>
<Div className="p-Home Div288 bpt" {...Div288Props} {...Div288Cb} {...Div288IoProps}>
<Flex className="p-Home Flex180 bpt" {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<TextBox className="p-Home TextBox360 bpt" {...TextBox360Props} {...TextBox360Cb} {...TextBox360IoProps}/>
<Image className="p-Home Image121 bpt" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
</Flex>
<TextBox className="p-Home TextBox363 bpt" {...TextBox363Props} {...TextBox363Cb} {...TextBox363IoProps}/>
<Div className="p-Home Div286 bpt" {...Div286Props} {...Div286Cb} {...Div286IoProps}>
<Flex className="p-Home Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<TextBox className="p-Home TextBox357 bpt" {...TextBox357Props} {...TextBox357Cb} {...TextBox357IoProps}/>
<Image className="p-Home Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
</Flex>
<TextBox className="p-Home TextBox359 bpt" {...TextBox359Props} {...TextBox359Cb} {...TextBox359IoProps}/>
</Div>
</Div>
<Div className="p-Home Div287 bpt" {...Div287Props} {...Div287Cb} {...Div287IoProps}>
<Flex className="p-Home Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<TextBox className="p-Home TextBox358 bpt" {...TextBox358Props} {...TextBox358Cb} {...TextBox358IoProps}/>
<Image className="p-Home Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
</Flex>
<TextBox className="p-Home TextBox362 bpt" {...TextBox362Props} {...TextBox362Cb} {...TextBox362IoProps}/>
</Div>
</Div>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
</Div>
<Div className="p-Home call_me bpt" {...call_meProps} {...call_meCb} {...call_meIoProps}>
<Div className="p-Home Div279 bpt" {...Div279Props} {...Div279Cb} {...Div279IoProps}>
<TextBox className="p-Home TextBox324 bpt" {...TextBox324Props} {...TextBox324Cb} {...TextBox324IoProps}/>
<TextBox className="p-Home TextBox325 bpt" {...TextBox325Props} {...TextBox325Cb} {...TextBox325IoProps}/>
</Div>
</Div>
<Div className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}>
<Div className="p-Home Div274 bpt" {...Div274Props} {...Div274Cb} {...Div274IoProps}>
<Flex className="p-Home Flex166 bpt" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<Div className="p-Home Div275 bpt" {...Div275Props} {...Div275Cb} {...Div275IoProps}>
<Flex className="p-Home Flex167 bpt" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<Div className="p-Home Div277 bpt" {...Div277Props} {...Div277Cb} {...Div277IoProps}>
<Div className="p-Home Div281 bpt" {...Div281Props} {...Div281Cb} {...Div281IoProps}>
<TextBox className="p-Home TextBox331 bpt" {...TextBox331Props} {...TextBox331Cb} {...TextBox331IoProps}/>
<Image className="p-Home Image115 bpt" {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
</Div>
<TextBox className="p-Home TextBox329 bpt" {...TextBox329Props} {...TextBox329Cb} {...TextBox329IoProps}/>
<Div className="p-Home Div280 bpt" {...Div280Props} {...Div280Cb} {...Div280IoProps}>
<Image className="p-Home Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
<TextBox className="p-Home TextBox328 bpt" {...TextBox328Props} {...TextBox328Cb} {...TextBox328IoProps}/>
</Div>
</Div>
<Div className="p-Home Div278 bpt" {...Div278Props} {...Div278Cb} {...Div278IoProps}>
<Flex className="p-Home Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<TextBox className="p-Home TextBox332 bpt" {...TextBox332Props} {...TextBox332Cb} {...TextBox332IoProps}/>
<TextBox className="p-Home TextBox335 bpt" {...TextBox335Props} {...TextBox335Cb} {...TextBox335IoProps}/>
<TextBox className="p-Home TextBox336 bpt" {...TextBox336Props} {...TextBox336Cb} {...TextBox336IoProps}/>
</Flex>
<Flex className="p-Home Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<TextBox className="p-Home TextBox345 bpt" {...TextBox345Props} {...TextBox345Cb} {...TextBox345IoProps}/>
<TextBox className="p-Home TextBox344 bpt" {...TextBox344Props} {...TextBox344Cb} {...TextBox344IoProps}/>
<TextBox className="p-Home TextBox343 bpt" {...TextBox343Props} {...TextBox343Cb} {...TextBox343IoProps}/>
</Flex>
<Flex className="p-Home Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<TextBox className="p-Home TextBox348 bpt" {...TextBox348Props} {...TextBox348Cb} {...TextBox348IoProps}/>
<TextBox className="p-Home TextBox347 bpt" {...TextBox347Props} {...TextBox347Cb} {...TextBox347IoProps}/>
<TextBox className="p-Home TextBox346 bpt" {...TextBox346Props} {...TextBox346Cb} {...TextBox346IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Home footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<Div className="p-Home Div282 bpt" {...Div282Props} {...Div282Cb} {...Div282IoProps}>
<TextBox className="p-Home TextBox350 bpt" {...TextBox350Props} {...TextBox350Cb} {...TextBox350IoProps}/>
</Div>
</Div>
  </>);
}
