import{j as e}from"./jsx-runtime-CsXQJ7ac.js";import{r as i}from"./iframe-DCpW1vpJ.js";import{M as C,N as I}from"./NestedMenu-CNXuwU6o.js";import{B as b}from"./Button-Drhmfn0v.js";import{I as y}from"./IconArrowDownloadFilled-BN2GaKgq.js";import{I as g,a as h,b as x}from"./IconBeach-Bji8D7Es.js";import{I as M}from"./IconMore-JJxXLj4d.js";import{I as O}from"./IconCheckmark-B0uGzmhV.js";import{I as n}from"./IconSettings-CtQ4ogtj.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Bsd_ffEq.js";import"./index-DpzkZJq1.js";import"./Text-DhpIWbf4.js";import"./helpers-D1w7W5rb.js";import"./index-AboGxAif.js";import"./types-p5G-Q8ac.js";import"./Popover-elIybGUc.js";import"./IconDismiss-CB0kTwAt.js";import"./Link-DapaRTio.js";import"./index-CfmjGrBY.js";import"./CollapseGroup-C156Ahfe.js";import"./Divider-1XlHCHar.js";import"./AnimatePresenceWrapper-B6hq0xOt.js";import"./IconChevronDown-BR1ky2qY.js";import"./IconChevronUp-DeV4Xc2D.js";import"./IconChevronRight-CcmnjW1S.js";import"./AvatarGroup-CrNyT0JT.js";import"./DropzoneFileUpload-Cl7PcYcN.js";import"./Label-Ce0a4a2t.js";import"./useFormProps-MTbDTz_h.js";import"./ErrorMessage-PuOsB1Yv.js";import"./IconDynamicComponent-1UeWV85B.js";import"./Snackbar-DXgVF9y1.js";import"./Alert-lKrAIaYv.js";import"./IconDismissFilled-BJ4lTv2M.js";import"./Progress-B22pRYwm.js";import"./IconAdd-CHPi_4VC.js";import"./Checkbox-CLx96l_c.js";import"./IconInfo-D6pH0U5G.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
