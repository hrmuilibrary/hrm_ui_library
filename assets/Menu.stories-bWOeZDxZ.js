import{j as e}from"./jsx-runtime-DyIpy8Yc.js";import{r as i}from"./iframe-DZvB0qs9.js";import{M as C,N as I}from"./NestedMenu-DxXcxm36.js";import{B as b}from"./Button-CrlcZ-C4.js";import{I as y}from"./IconArrowDownloadFilled-ZNwLTZ3L.js";import{I as g,a as h,b as x}from"./IconBeach-DigP-8R6.js";import{I as M}from"./IconMore-DudQr-KG.js";import{I as O}from"./IconCheckmark-Bdswps9W.js";import{I as n}from"./IconSettings-BJYDDa7k.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-8P995OuL.js";import"./index-Cu6n4AVG.js";import"./Text-CDQhGwat.js";import"./helpers-Dw1_b3or.js";import"./index-AboGxAif.js";import"./types-Be42hUOW.js";import"./index-BPjGBHMf.js";import"./Popover-B19GG2ff.js";import"./IconDismiss-DZBXDVfp.js";import"./Link-B5MKs1lY.js";import"./CollapseGroup-DCyAAdF7.js";import"./Divider-ByQzpDWN.js";import"./AnimatePresenceWrapper-BjHuWXIP.js";import"./IconChevronDown-WO0F_wCN.js";import"./IconChevronUp-Bnc8nPwt.js";import"./IconChevronRight-BNxuJPqd.js";import"./AvatarGroup-89Yt5Pqa.js";import"./DropzoneFileUpload-R427p9Li.js";import"./Label-F-T65YLK.js";import"./useFormProps-CFDxfgKv.js";import"./ErrorMessage-D3x06M_y.js";import"./IconDynamicComponent-DLfUOzMP.js";import"./Snackbar-Cu-vbDAs.js";import"./Alert-fCJjPVwg.js";import"./IconDismissFilled-Ctj_33jn.js";import"./Progress-BDPo_k4G.js";import"./IconAdd-DenQjdbk.js";import"./Checkbox-DwCHHAG_.js";import"./IconInfo-CZOArMLj.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
