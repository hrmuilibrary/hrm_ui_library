import{j as r}from"./jsx-runtime-k_MLO1Wb.js";import{r as u}from"./iframe-sgfNtyBG.js";import{b as L,a as V}from"./index.esm-8dRvAwXP.js";import{u as v,g as S,C as _,F as b}from"./FormContainer-06ELrHrw.js";import{E as N}from"./ErrorMessage-DMJk2C3s.js";import{F as O}from"./types-DtgUqQ59.js";import{c as R}from"./index-XhOZWseF.js";import{B as q}from"./Button-apInVggO.js";import{I as M}from"./Input-Dc-fuwkB.js";import{u as D}from"./useFormProps-CnzDY0Jq.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-D3S4jZTF.js";import"./helpers-hQnIkfdi.js";import"./IconDynamicComponent-C4baUpSP.js";import"./index-DpRnm5po.js";import"./Label-24isxuk5.js";import"./IconCheckmarkCircleFilled-pbW960e6.js";var k=function(e){var s=e.as,t=e.errors,o=e.name,n=e.message,p=e.render,F=(function(d,h){if(d==null)return{};var a,m,c={},I=Object.keys(d);for(m=0;m<I.length;m++)h.indexOf(a=I[m])>=0||(c[a]=d[a]);return c})(e,["as","errors","name","message","render"]),g=v(),l=S(t||g.formState.errors,o);if(!l)return null;var i=l.message,E=l.types,f=Object.assign({},F,{children:i||n});return u.isValidElement(s)?u.cloneElement(s,f):p?p({message:i||n,messages:E}):u.createElement(s||u.Fragment,f)};const j=e=>{const{As:s,name:t,className:o="",dataId:n="",hideErrorMessage:p=!1,errorMessageIcon:F,defaultValue:g}=e,{register:l,errors:i,setValue:E,control:f}=u.useContext(O);if(!l)return null;const d=l(t);return r.jsx("div",{className:R("form-container__field",o,t),children:r.jsx(_,{control:f,name:t,...g?{defaultValue:g}:{},render:({field:h,fieldState:a})=>{var m;return r.jsxs(r.Fragment,{children:[s({hasError:!!a.error,isValid:a.isTouched&&a.isDirty&&!a.invalid,dataId:n,...d,setFieldValue:(c,I,A)=>E(c,I,{shouldValidate:!0,shouldDirty:!0,shouldTouch:!0,...A}),...h}),p?null:r.jsx(k,{name:(m=i==null?void 0:i[t])!=null&&m.root?`${t}.root`:t,errors:i,render:({message:c})=>r.jsx(N,{dataId:n,message:c||"",className:"full-width",icon:F})})]})}})})};j.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{As:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: IFormCompProps) => React.ReactElement",signature:{arguments:[{type:{name:"IFormCompProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},description:""},name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},dataId:{required:!1,tsType:{name:"string"},description:""},hideErrorMessage:{required:!1,tsType:{name:"boolean"},description:""},errorMessageIcon:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"any"},description:""}}};const ne={title:"Form Container",component:b},w=L({firstname:V().required("validation")}),B=()=>{const{trigger:e,onSubmit:s}=D(),t=async o=>{await(e==null?void 0:e("firstname"))&&s&&s()};return r.jsx(j,{name:"firstname",As:o=>r.jsx(M,{handleBlurEvent:t,...o})})},P=()=>{const e={firstname:""},[s,t]=u.useState(!1),o=n=>{t(!0),console.log(n)};return console.log(s),r.jsx("div",{style:{maxWidth:300},children:r.jsx(b,{onSubmit:o,validationScheme:w,initialValues:e,children:r.jsxs(r.Fragment,{children:[r.jsx(B,{}),r.jsx(q,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:s})]})})})},x=P.bind({});var y,T,C;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => {
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
      <_FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES}>
        <>
          <CustomInput />
          {/*// @ts-ignore*/}
          {/*<FormField name="date" As={(props) => <SimpleDatePicker {...props} />} />*/}

          <Button buttonActionType="submit" buttonText={'Ok'} className="mt-16" isLoading={isLoading} />
        </>
      </_FormContainer>
    </div>;
}`,...(C=(T=x.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const ae=["FormContainer"];export{x as FormContainer,ae as __namedExportsOrder,ne as default};
