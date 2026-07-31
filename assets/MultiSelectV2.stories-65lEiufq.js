import{j as e}from"./jsx-runtime-SbcHhCkt.js";import{r as c}from"./iframe-Bgel0fic.js";import{b as he,d as ye}from"./index.esm-2Q39xOSV.js";import{c as M}from"./index-CUaafn95.js";import{T as y}from"./Text-q0y3Ugtx.js";import{A as W}from"./AvatarGroup-DnWWAT1O.js";import{B as Se}from"./BadgeV2-CFopSjCT.js";import{I as fe}from"./IconDismiss-BaS8VnQ4.js";import{L as be}from"./Label-Dv42gwgl.js";import{E as xe}from"./ErrorMessage-GCBX73zC.js";import"./types-DyFBYxib.js";import{u as Te}from"./useOnOutsideClick-C4DFK_Rl.js";import{F as Ie}from"./FormContainer-CMeaO2Ve.js";import{F as qe}from"./FormField-Ahvy87yi.js";import{B as Ae}from"./Button-BGu00P_f.js";import"./preload-helper-Dp1pzeXC.js";import"./helpers-BU9J2je4.js";import"./Tooltip-CakgRycE.js";import"./index-AboGxAif.js";import"./index-D0MkiU4T.js";import"./DropzoneFileUpload-MjzVIVVY.js";import"./useFormProps-CJCsrNRZ.js";import"./IconArrowDownloadFilled-B-yZ2LoB.js";import"./Snackbar-Ds06ZvPY.js";import"./IconDynamicComponent-CfloZ5Ca.js";import"./Alert-CIJ-9NHS.js";import"./IconDismissFilled-D0BF8xvg.js";import"./Progress-CaC0wUB5.js";import"./IconAdd-BnSB7egK.js";const v=c.forwardRef((o,a)=>{const{options:i,selectedItems:d,value:s,onAdd:r,onRemove:u,setFieldValue:p,name:T,placeholder:re,hasError:F,label:le,labelAddons:oe,required:de,disabled:m,error:h,helperText:V,className:me="",dataTestId:I="",size:ce="medium",dropdownWidth:D,translations:k,dataTestIdPrefix:ue}=o,[E,R]=c.useState(""),[P,q]=c.useState(!1),C=c.useRef(null),pe=c.useId(),n=ue||I,N=F!==void 0?F:!!h,A=c.useMemo(()=>s||d||[],[s,d]);Te(C.current,()=>{q(!1),R("")},P,pe);const z=i.filter(t=>{var g;return!A.find(O=>O.id===t.id)&&(t.name.toLowerCase().includes(E.toLowerCase())||((g=t.meta)==null?void 0:g.toLowerCase().includes(E.toLowerCase())))}),ge=t=>{if(m)return;const g=[...A,t];T&&p&&p(T,g),r==null||r(t),R(""),q(!1)},ve=t=>{if(m)return;const g=A.filter(O=>O.id!==t);T&&p&&p(T,g),u==null||u(t)};return e.jsxs("div",{className:M("multi-select-v2",`multi-select-v2--${ce}`,me,{"multi-select-v2--invalid":N,"multi-select-v2--disabled":m}),children:[e.jsx(be,{text:le,required:de,disabled:m,labelAddons:oe,dataTestId:I}),e.jsxs("div",{ref:C,className:M("multi-select-v2__inner","flexbox","align-items--center","gap-8"),"data-test-id":I,children:[A.map(t=>e.jsxs("div",{className:M("multi-select-v2__chip",{"multi-select-v2__chip--highlighted":t.highlighted}),children:[e.jsx(W,{initials:t.initials,size:"xsmall"}),e.jsx(y,{size:"small",type:t.highlighted?"selected":void 0,className:"multi-select-v2__chip-name",children:t.name}),t.badge?e.jsx(Se,{text:t.badge,size:"small",type:"gray",style:"light",className:"multi-select-v2__chip-badge",dataTestId:n?`${n}-badge-${t.id}`:void 0}):null,e.jsx("button",{type:"button",className:"multi-select-v2__chip-remove",disabled:m,"data-test-id":n?`${n}-chip-remove-${t.id}`:void 0,onClick:()=>ve(t.id),children:e.jsx(fe,{size:"xxsmall",type:"tertiary"})})]},t.id)),e.jsx("div",{className:"multi-select-v2__search-wrap",children:e.jsx("input",{ref:a,className:"multi-select-v2__search",disabled:m,"data-test-id":n?`${n}-search`:void 0,value:E,placeholder:re,onChange:t=>{R(t.target.value),q(!0)},onFocus:()=>q(!0)})}),P&&!m?e.jsx("div",{className:M("multi-select-v2__dropdown","multi-select-v2__dropdown__options-scroll","scrollbar","scrollbar--vertical"),style:D?{width:D,right:"auto"}:void 0,children:z.length>0?z.map(t=>e.jsxs("button",{type:"button",className:"multi-select-v2__dropdown-item","data-test-id":n?`${n}-dropdown-item-${t.id}`:void 0,onClick:()=>ge(t),children:[e.jsx(W,{initials:t.initials,size:"xsmall"}),e.jsxs("div",{className:"multi-select-v2__dropdown-info",children:[e.jsx(y,{size:"small",weight:"semibold",children:t.name}),t.meta?e.jsx(y,{size:"xsmall",type:"tertiary",children:t.meta}):null]})]},t.id)):e.jsx(y,{size:"small",type:"tertiary",className:"multi-select-v2__dropdown-empty",dataTestId:n?`${n}-dropdown-empty`:void 0,children:k==null?void 0:k.emptyListMainMessage})}):null]}),h||V?e.jsxs("div",{className:"multi-select-v2__message mt-8",children:[N&&h?e.jsx(xe,{message:h,icon:"infoFilled",dataTestId:I}):null,V&&!(N&&h)?e.jsx(y,{size:"small",type:m?"disabled":"secondary",children:V}):null]}):null]})});v.displayName="MultiSelectV2";v.__docgenInfo={description:"",methods:[],displayName:"MultiSelectV2",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isValid:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"TFormValue"},description:""},onChange:{required:!1,tsType:{name:"TOnChange"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},setFieldValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  name: string,
  value: TFormValue,
  shouldValidate?: { shouldValidate: boolean }
) => void`,signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"TFormValue"},name:"value"},{type:{name:"signature",type:"object",raw:"{ shouldValidate: boolean }",signature:{properties:[{key:"shouldValidate",value:{name:"boolean",required:!0}}]}},name:"shouldValidate"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}}],raw:"TMultiSelectOption[]"},description:""},selectedItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}}],raw:"TMultiSelectOption[]"},description:""},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TMultiSelectOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},labelAddons:{required:!1,tsType:{name:"ReactElement"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},dropdownWidth:{required:!1,tsType:{name:"number"},description:""},translations:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  emptyListMainMessage?: string
}`,signature:{properties:[{key:"emptyListMainMessage",value:{name:"string",required:!1}}]}},description:""},dataTestIdPrefix:{required:!1,tsType:{name:"string"},description:""}}};const st={title:"MultiSelectV2",component:v,argTypes:{size:{options:["small","medium","large"],control:{type:"radio"}}}},l=[{id:"1",name:"Ann Smith",initials:"AS",meta:"HR Manager · People",badge:"You",highlighted:!0},{id:"2",name:"John Doe",initials:"JD",meta:"Engineer · Engineering"},{id:"3",name:"Maria Petrosyan",initials:"MP",meta:"Designer · Product"},{id:"4",name:"David Grant",initials:"DG",meta:"Recruiter · People"},{id:"5",name:"Lilit Harutyunyan",initials:"LH",meta:"Accountant · Finance"},{id:"6",name:"Karen Sargsyan",initials:"KS",meta:"Backend Engineer · Engineering"},{id:"7",name:"Anna Baghdasaryan",initials:"AB",meta:"QA Engineer · Engineering"},{id:"8",name:"Tigran Avetisyan",initials:"TA",meta:"Product Manager · Product"},{id:"9",name:"Sona Grigoryan",initials:"SG",meta:"UX Researcher · Product"},{id:"10",name:"Vahagn Manukyan",initials:"VM",meta:"DevOps Engineer · Engineering"},{id:"11",name:"Nare Petrosyan",initials:"NP",meta:"Talent Acquisition · People"},{id:"12",name:"Armen Ghukasyan",initials:"AG",meta:"Frontend Engineer · Engineering"},{id:"13",name:"Diana Sahakyan",initials:"DS",meta:"Marketing Lead · Marketing"},{id:"14",name:"Hovhannes Dallakyan",initials:"HD",meta:"Data Analyst · Finance"},{id:"15",name:"Mane Voskanyan",initials:"MV",meta:"Support Specialist · Support"},{id:"16",name:"Gor Aslanyan",initials:"GA",meta:"Security Engineer · Engineering"},{id:"17",name:"Elen Mkrtchyan",initials:"EM",meta:"Payroll Specialist · Finance"},{id:"18",name:"Narek Hakobyan",initials:"NH",meta:"Solutions Architect · Engineering"}],w=o=>{const[a,i]=c.useState(()=>o.selectedItems??[]),d=r=>i(u=>[...u,r]),s=r=>i(u=>u.filter(p=>p.id!==r));return e.jsx("div",{style:{maxWidth:400},children:e.jsx(v,{...o,selectedItems:a,onAdd:d,onRemove:s})})},S=w.bind({});S.args={options:l,label:"Participants",placeholder:"Search and select people",selectedItems:[l[0]],helperText:"Add people to notify about this trip.",required:!0,size:"medium",dataTestIdPrefix:"multi-select-v2"};const Me=()=>{const[o,a]=c.useState({small:[],medium:[],large:[]});return e.jsx("div",{style:{maxWidth:400,display:"flex",flexDirection:"column",gap:24},children:["small","medium","large"].map(i=>e.jsx(v,{size:i,label:i,options:l,placeholder:"Search and select people",selectedItems:o[i],onAdd:d=>a(s=>({...s,[i]:[...s[i],d]})),onRemove:d=>a(s=>({...s,[i]:s[i].filter(r=>r.id!==d)}))},i))})},_=Me.bind({}),f=w.bind({});f.args={options:l,label:"Reviewers",placeholder:"Add a reviewer...",dropdownWidth:320,dataTestIdPrefix:"multi-select-v2-fixed-width"};const b=w.bind({});b.args={options:l,label:"Skills",placeholder:"Add a skill...",required:!0,hasError:!0,error:"Select at least one option.",dataTestId:"multi-select-v2-error"};const x=w.bind({});x.args={options:l,label:"Participants",selectedItems:[l[0],l[1]],disabled:!0,dataTestId:"multi-select-v2-disabled"};const _e=he({managers:ye().min(1,"validation").required("validation")}),je=()=>{const o=a=>{console.log(a)};return e.jsx("div",{style:{maxWidth:400},children:e.jsx(Ie,{onSubmit:o,validationScheme:_e,initialValues:{managers:[]},dataTestId:"multi-select-v2-form",children:e.jsxs(e.Fragment,{children:[e.jsx(qe,{name:"managers",As:a=>e.jsx(v,{...a,options:l,placeholder:"Search and select people",label:"label"})}),e.jsx(Ae,{buttonActionType:"submit",buttonText:"Save",className:"mt-16"})]})})})},j=je.bind({});var L,$,H;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(H=($=S.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var B,G,Q;_.parameters={..._.parameters,docs:{...(B=_.parameters)==null?void 0:B.docs,source:{originalSource:`(): React.ReactElement => {
  const [values, setValues] = useState<Record<string, TMultiSelectOption[]>>({
    small: [],
    medium: [],
    large: []
  });
  return <div style={{
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <_MultiSelectV2 key={size} size={size} label={size} options={OPTIONS} placeholder="Search and select people" selectedItems={values[size]} onAdd={item => setValues(prev => ({
      ...prev,
      [size]: [...prev[size], item]
    }))} onRemove={id => setValues(prev => ({
      ...prev,
      [size]: prev[size].filter(i => i.id !== id)
    }))} />)}
    </div>;
}`,...(Q=(G=_.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var J,K,U;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(U=(K=f.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ie;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(ie=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,se,ne;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`(): React.ReactElement => {
  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return <div style={{
    maxWidth: 400
  }}>
      <FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={{
      managers: []
    }} dataTestId="multi-select-v2-form">
        <>
          <FormField name="managers" As={props => <_MultiSelectV2 {...props} options={OPTIONS} placeholder="Search and select people" label={'label'} />} />
          <Button buttonActionType="submit" buttonText="Save" className="mt-16" />
        </>
      </FormContainer>
    </div>;
}`,...(ne=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const nt=["MultiSelectV2","Sizes","CustomDropdownWidth","RequiredWithError","Disabled","WithFormContainer"];export{f as CustomDropdownWidth,x as Disabled,S as MultiSelectV2,b as RequiredWithError,_ as Sizes,j as WithFormContainer,nt as __namedExportsOrder,st as default};
