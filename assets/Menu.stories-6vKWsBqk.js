import{j as e}from"./jsx-runtime-DnW06xKa.js";import{r as i}from"./iframe-BVgm8kLa.js";import{M as C,N as I}from"./NestedMenu-CRM8SMWN.js";import{B as b}from"./Button-D8CKayDJ.js";import{I as y}from"./IconArrowDownloadFilled-DoAhiJqu.js";import{I as g,a as h,b as x}from"./IconBeach-ByvEsvzL.js";import{I as M}from"./IconMore-DN9gMHsE.js";import{I as O}from"./IconCheckmark-xzTeI3-0.js";import{I as n}from"./IconSettings-D8p_w8iM.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BHBxO6pq.js";import"./index-D-u9sh9c.js";import"./Text-BcJhQMnT.js";import"./helpers-DAr_VmM3.js";import"./index-AboGxAif.js";import"./types-CnbeBJQT.js";import"./index-BibDvsnG.js";import"./Popover-BdWQLhAy.js";import"./IconDismiss-BmkvdkVO.js";import"./Link-D1BL-g1e.js";import"./CollapseGroup-yoJl0_DD.js";import"./Divider-BSSPPMbb.js";import"./AnimatePresenceWrapper-wo7ImqbY.js";import"./IconChevronDown-Bc5fxa0I.js";import"./IconChevronUp-DmWQXv4M.js";import"./IconChevronRight-CjQs8WzP.js";import"./AvatarGroup-D6UvoaGN.js";import"./DropzoneFileUpload-DB2yoOLs.js";import"./Label-DbggNA0R.js";import"./useFormProps-BXbTdOxx.js";import"./ErrorMessage-eVKdZmgc.js";import"./IconDynamicComponent-BfnY55I4.js";import"./Snackbar-D-cR0YxG.js";import"./Alert-D1XerBst.js";import"./IconDismissFilled-CwMxjVRF.js";import"./Progress-DLxn3ndC.js";import"./IconAdd-B_bzxl7a.js";import"./Checkbox-BSpg4KKX.js";import"./IconInfo-DaD97Obl.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
