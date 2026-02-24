import{j as e}from"./jsx-runtime-Dad0Pt4t.js";import{r as i}from"./iframe-CmGV6xoK.js";import{M as C,N as I}from"./NestedMenu-BV3lU8o1.js";import{B as b}from"./Button-DbBZD8p2.js";import{I as y}from"./IconArrowDownloadFilled-C0lK5ilm.js";import{I as g,a as h,b as x}from"./IconBeach-BMZmvW8o.js";import{I as M}from"./IconMore-BTMoJqQi.js";import{I as O}from"./IconCheckmark-CwsFZsyU.js";import{I as n}from"./IconSettings-CyQGusSh.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-B8X2zOYN.js";import"./index-CmL5Y0ic.js";import"./Text-DP1ffZD3.js";import"./helpers-BuzDaASc.js";import"./index-DYDl_GcV.js";import"./types-CFsqkMqD.js";import"./Popover-BGNtKZ-u.js";import"./IconDismiss-CAV4zZ-5.js";import"./Link-BEDsvzFi.js";import"./index-D4bjqLnt.js";import"./CollapseGroup-9eLyq47j.js";import"./Divider-3LRuQ1JM.js";import"./AnimatePresenceWrapper-DM0Tp5aj.js";import"./IconChevronDown-G26SgSgE.js";import"./IconChevronUp-CTeh0Qct.js";import"./IconChevronRight-BRKHx9Gt.js";import"./AvatarGroup-A9JuLHU4.js";import"./DropzoneFileUpload-C4xc2Y5z.js";import"./Label-D6_6GgrR.js";import"./useFormProps-CcFeurmF.js";import"./ErrorMessage-BRMog3E2.js";import"./IconDynamicComponent-w65LUGiU.js";import"./Snackbar-PDFnAI7j.js";import"./Alert-DGOym6vj.js";import"./IconDismissFilled-Cvr4n4Mr.js";import"./Progress-CPdSZJzj.js";import"./IconAdd-DBWnU8eu.js";import"./Checkbox-BdHLKVT5.js";import"./IconInfo-CK6vxSv8.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
