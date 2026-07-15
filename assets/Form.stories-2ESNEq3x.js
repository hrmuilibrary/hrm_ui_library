import{j as t}from"./jsx-runtime-nuCDw52l.js";import{r as d}from"./iframe-DvaikATC.js";import{b as L,a as V}from"./index.esm-S4wbdgsE.js";import{u as v,g as S,C as _,F as b}from"./FormContainer-Cca_yU9s.js";import{E as N}from"./ErrorMessage-VJ0jEVqV.js";import{F as O}from"./types-DZkqWelN.js";import{c as R}from"./index-CXIjQS3l.js";import{B as q}from"./Button-Dk_C7-v5.js";import{I as M}from"./Input-DElOWCzV.js";import{u as D}from"./useFormProps-CFyMqcT3.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-DB5RiTxF.js";import"./helpers-BEm6AbwL.js";import"./IconDynamicComponent-Cmn2_7yz.js";import"./index-1pWFmpdE.js";import"./Label-C4okipqK.js";import"./IconCheckmarkCircleFilled-DD9Ku2Kg.js";var k=function(e){var s=e.as,r=e.errors,o=e.name,n=e.message,p=e.render,F=(function(u,T){if(u==null)return{};var a,m,l={},I=Object.keys(u);for(m=0;m<I.length;m++)T.indexOf(a=I[m])>=0||(l[a]=u[a]);return l})(e,["as","errors","name","message","render"]),g=v(),c=S(r||g.formState.errors,o);if(!c)return null;var i=c.message,E=c.types,f=Object.assign({},F,{children:i||n});return d.isValidElement(s)?d.cloneElement(s,f):p?p({message:i||n,messages:E}):d.createElement(s||d.Fragment,f)};const j=e=>{const{As:s,name:r,className:o="",dataTestId:n="",hideErrorMessage:p=!1,errorMessageIcon:F,defaultValue:g}=e,{register:c,errors:i,setValue:E,control:f}=d.useContext(O);if(!c)return null;const u=c(r);return t.jsx("div",{className:R("form-container__field",o,r),children:t.jsx(_,{control:f,name:r,...g?{defaultValue:g}:{},render:({field:T,fieldState:a})=>{var m;return t.jsxs(t.Fragment,{children:[s({hasError:!!a.error,isValid:a.isTouched&&a.isDirty&&!a.invalid,dataTestId:n,...u,setFieldValue:(l,I,A)=>E(l,I,{shouldValidate:!0,shouldDirty:!0,shouldTouch:!0,...A}),...T}),p?null:t.jsx(k,{name:(m=i==null?void 0:i[r])!=null&&m.root?`${r}.root`:r,errors:i,render:({message:l})=>t.jsx(N,{dataTestId:n,message:l||"",className:"full-width",icon:F})})]})}})})};j.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},As:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: IFormCompProps) => React.ReactElement",signature:{arguments:[{type:{name:"IFormCompProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},description:""},name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideErrorMessage:{required:!1,tsType:{name:"boolean"},description:""},errorMessageIcon:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"any"},description:""}}};const ne={title:"Form Container",component:b},w=L({firstname:V().required("validation")}),B=()=>{const{trigger:e,onSubmit:s}=D(),r=async o=>{await(e==null?void 0:e("firstname"))&&s&&s()};return t.jsx(j,{name:"firstname",As:o=>t.jsx(M,{handleBlurEvent:r,...o})})},P=()=>{const e={firstname:""},[s,r]=d.useState(!1),o=n=>{r(!0),console.log(n)};return console.log(s),t.jsx("div",{style:{maxWidth:300},children:t.jsx(b,{onSubmit:o,validationScheme:w,initialValues:e,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(B,{}),t.jsx(q,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:s})]})})})},x=P.bind({});var h,y,C;x.parameters={...x.parameters,docs:{...(h=x.parameters)==null?void 0:h.docs,source:{originalSource:`(): React.ReactElement => {
  const INITIAL_VALUES = {
    firstname: ''
  };
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log(data);
  };
  console.log(isLoading);
  return <div style={{
    maxWidth: 300
  }}>
      <_FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES} dataTestId="form-container">
        <>
          <CustomInput />
          {/*// @ts-ignore*/}
          {/*<FormField name="date" As={(props) => <SimpleDatePicker {...props} />} />*/}

          <Button buttonActionType="submit" buttonText={'Ok'} className="mt-16" isLoading={isLoading} />
        </>
      </_FormContainer>
    </div>;
}`,...(C=(y=x.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const ae=["FormContainer"];export{x as FormContainer,ae as __namedExportsOrder,ne as default};
