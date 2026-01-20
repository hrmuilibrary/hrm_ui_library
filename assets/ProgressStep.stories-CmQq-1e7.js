import{j as t}from"./Text-BCy2auDT.js";import{r as i}from"./iframe-DbuX508q.js";import"./DropzoneFileUpload-CwB8h4Ko.js";import{p as m,q as s}from"./UnderConstruction-yQIFCI6E.js";import{B as n}from"./types-B_RHM9mB.js";import"./ButtonGroup-oSe1aLcB.js";import"./Chips-bt-0p-g_.js";import"./preload-helper-Dp1pzeXC.js";import"./IconInfo-D2MfdYuB.js";import"./IconChevronDoubleRight-BJ7fJSHq.js";import"./IconDismissCircleFilled-C_WNxUpC.js";import"./index-CaVCUHbj.js";const T=[{value:1,label:"label1 label1 label1 label1",subText:"Subtext1",status:s.initial},{value:2,label:"label2",subText:"Subtext2",status:s.initial},{value:3,label:"label3",subText:"Subtext3",status:s.initial}],N={title:"ProgressStep",component:m,argTypes:{stepType:{options:["number","dot"],control:{type:"radio"}},stepDirection:{options:["horizontal","vertical"],control:{type:"radio"}},stepSize:{options:["large","small"],control:{type:"radio"}}}},g=u=>{const[a,d]=i.useState(1),[o,b]=i.useState(T),p=v=>{d(v);const x=o.map(r=>r.value===a?{...r,status:s.completed}:r);b(x)};return t.jsxs("div",{style:{width:500},children:[t.jsx(m,{...u,steps:o,activeStep:a,setActiveStep:p}),t.jsxs("div",{className:"mt-40",children:[t.jsx(n,{buttonText:"back",type:"secondary",className:"mr-8"}),t.jsx(n,{buttonText:"next",type:"primary",onClick:()=>p(2)})]})]})},e=g.bind({});e.args={stepType:"number",stepDirection:"horizontal",stepSize:"large"};var l,c,S;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [activeStep, setActiveStep] = useState<TStepValue>(1);
  const [steps, setSteps] = useState<TSteps>(STEPS);
  const changeStep = (stepValue: TStepValue) => {
    setActiveStep(stepValue);
    const modified = steps.map(stepItem => {
      if (stepItem.value === activeStep) {
        return {
          ...stepItem,
          status: PROGRESS_STATUSES.completed
        };
      }
      return stepItem;
    });
    setSteps(modified);
  };
  return <div style={{
    width: 500
  }}>
      <_ProgressStep {...args} steps={steps} activeStep={activeStep} setActiveStep={changeStep} />

      <div className="mt-40">
        <Button buttonText={'back'} type="secondary" className="mr-8" />
        <Button buttonText={'next'} type="primary" onClick={() => changeStep(2)} />
      </div>
    </div>;
}`,...(S=(c=e.parameters)==null?void 0:c.docs)==null?void 0:S.source}}};const V=["ProgressStep"];export{e as ProgressStep,V as __namedExportsOrder,N as default};
