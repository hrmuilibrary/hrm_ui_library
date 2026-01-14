import{j as t}from"./jsx-runtime-uGtigUhx.js";import{r as i}from"./iframe-CCpZ0RzU.js";import"./DropzoneFileUpload-B6UIcAcl.js";import{o as S,p as s}from"./UnderConstruction-A_PNalYn.js";import{B as n}from"./types-DQfykHh9.js";import"./ButtonGroup-CujBHiIl.js";import"./Chips-DjPG7KFe.js";import"./Text-CGJlnosw.js";import"./IconYoutube-oOrWhdz0.js";import"./IconInfo-DaPyXjYs.js";import"./IconPerson-N3kFoPbx.js";import"./IconUnitsEmployee-CIp6I4TM.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDynamicComponent-DqSFy7yo.js";import"./index-31GdvHSE.js";import"./index-DZFHmqbk.js";const T=[{value:1,label:"label1 label1 label1 label1",subText:"Subtext1",status:s.initial},{value:2,label:"label2",subText:"Subtext2",status:s.initial},{value:3,label:"label3",subText:"Subtext3",status:s.initial}],C={title:"ProgressStep",component:S,argTypes:{stepType:{options:["number","dot"],control:{type:"radio"}},stepDirection:{options:["horizontal","vertical"],control:{type:"radio"}},stepSize:{options:["large","small"],control:{type:"radio"}}}},g=u=>{const[o,d]=i.useState(1),[a,b]=i.useState(T),p=v=>{d(v);const x=a.map(r=>r.value===o?{...r,status:s.completed}:r);b(x)};return t.jsxs("div",{style:{width:500},children:[t.jsx(S,{...u,steps:a,activeStep:o,setActiveStep:p}),t.jsxs("div",{className:"mt-40",children:[t.jsx(n,{buttonText:"back",type:"secondary",className:"mr-8"}),t.jsx(n,{buttonText:"next",type:"primary",onClick:()=>p(2)})]})]})},e=g.bind({});e.args={stepType:"number",stepDirection:"horizontal",stepSize:"large"};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["ProgressStep"];export{e as ProgressStep,D as __namedExportsOrder,C as default};
