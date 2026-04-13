import{j as e}from"./jsx-runtime-BlHdFfbs.js";import{r as i}from"./iframe-CPNXeZQD.js";import{M as C,N as I}from"./NestedMenu-9Ya15tz7.js";import{B as b}from"./Button-JN4pHmAj.js";import{I as y}from"./IconArrowDownloadFilled-_ZvBpOEX.js";import{I as g,a as h,b as x}from"./IconBeach-IHZzUQx2.js";import{I as M}from"./IconMore-DJTuSH4W.js";import{I as O}from"./IconCheckmark-o1RU375K.js";import{I as n}from"./IconSettings-C3UktH8W.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DGcGBEvO.js";import"./index-BuomKUqM.js";import"./Text-UZVrpgji.js";import"./helpers-BGvLm9Ex.js";import"./index-AboGxAif.js";import"./types-BFbCWV9V.js";import"./index-xvMEpEQ_.js";import"./Popover-Bd7XVUF8.js";import"./IconDismiss-Cl0XOc6y.js";import"./Link-D3-x_yrK.js";import"./CollapseGroup-BwQPwk0E.js";import"./Divider-DqFvMGuj.js";import"./AnimatePresenceWrapper-BjcFeZEn.js";import"./IconChevronDown-xBsg59KM.js";import"./IconChevronUp-Bqxf0Ta3.js";import"./IconChevronRight-Brs03ko2.js";import"./AvatarGroup-BZIwAWvR.js";import"./DropzoneFileUpload-DfMuueFt.js";import"./Label-DRQNhG0I.js";import"./useFormProps-DK_USs_r.js";import"./ErrorMessage-C_HkOBmb.js";import"./IconDynamicComponent-BWIne9Yl.js";import"./Snackbar-JXOvicmK.js";import"./Alert-Bq6lR--4.js";import"./IconDismissFilled-CZYqMp5N.js";import"./Progress-CvCgz1p2.js";import"./IconAdd-tvcSFNAF.js";import"./Checkbox-BiEOir9y.js";import"./IconInfo-DhLKROPg.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
